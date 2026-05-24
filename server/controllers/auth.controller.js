/*
|--------------------------------------------------------------------------
| AUTH CONTROLLER SERVICES
|--------------------------------------------------------------------------
| PURPOSE:
| Authentication + Authorization related operations
|
*/
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";

/*
|--------------------------------------------------------------------------
| COOKIE OPTIONS
|--------------------------------------------------------------------------
*/

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "None" : "Strict",
};

/*
|--------------------------------------------------------------------------
| GENERATE ACCESS & REFRESH TOKEN
|--------------------------------------------------------------------------
*/
const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;

    await user.save({
      validateBeforeSave: false,
    });

    return {
      accessToken,
      refreshToken,
    };
  } catch (error) {
    console.log("Token generation error:", error);

    throw new ApiError(500, "Something went wrong while generating tokens");
  }
};

/*
|--------------------------------------------------------------------------
| REGISTER USER
|--------------------------------------------------------------------------
*/
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, username, password } = req.body;

  // validation
  if (
    [name, email, username, password].some(
      (field) => !field || field.trim() === "",
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  // normalize data
  const normalizedEmail = email.toLowerCase().trim();
  const normalizedUsername = username.toLowerCase().trim();

  // check existing user
  const existingUser = await User.findOne({
    $or: [{ email: normalizedEmail }, { username: normalizedUsername }],
  });

  if (existingUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  // create user
  const user = await User.create({
    name: name.trim(),
    email: normalizedEmail,
    username: normalizedUsername,
    password,
  });

  // generate tokens
  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id,
  );

  // fetch created user
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken",
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering user");
  }

  return res
    .status(201)
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(
      new ApiResponse(
        201,
        {
          user: createdUser,
          accessToken,
          refreshToken,
        },
        "User registered successfully",
      ),
    );
});

/*
|--------------------------------------------------------------------------
| LOGIN USER
|--------------------------------------------------------------------------
*/
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Email/username and password are required");
  }

  const loginField = email.toLowerCase().trim();

  const isEmail = loginField.includes("@");

  // query
  const query = isEmail ? { email: loginField } : { username: loginField };

  // user check
  const user = await User.findOne(query).select("+password");

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  // password check
  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid credentials");
  }

  // generate tokens
  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id,
  );

  // fetch logged in user
  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken",
  );

  return res
    .status(200)
    .cookie("accessToken", accessToken, cookieOptions)
    .cookie("refreshToken", refreshToken, cookieOptions)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "Login successful",
      ),
    );
});

/*
|--------------------------------------------------------------------------
| LOGOUT USER
|--------------------------------------------------------------------------
*/
const logoutUser = asyncHandler(async (req, res) => {
  if (req.user?._id) {
    await User.findByIdAndUpdate(req.user._id, {
      $unset: {
        refreshToken: 1,
      },
    });
  }

  return res
    .status(200)
    .clearCookie("accessToken", cookieOptions)
    .clearCookie("refreshToken", cookieOptions)
    .json(new ApiResponse(200, {}, "User logged out successfully"));
});

/*
|--------------------------------------------------------------------------
| REFRESH ACCESS TOKEN
|--------------------------------------------------------------------------
*/
const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies?.refreshToken || req.body?.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "Unauthorized request");
  }

  try {
    // verify token
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET,
    );

    // find user
    const user = await User.findById(decodedToken?._id);

    if (!user) {
      throw new ApiError(401, "Invalid refresh token");
    }

    // token match check
    if (incomingRefreshToken !== user.refreshToken) {
      throw new ApiError(401, "Refresh token is expired or already used");
    }

    // generate new tokens
    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
      user._id,
    );

    return res
      .status(200)
      .cookie("accessToken", accessToken, cookieOptions)
      .cookie("refreshToken", refreshToken, cookieOptions)
      .json(
        new ApiResponse(
          200,
          {
            accessToken,
            refreshToken,
          },
          "Access token refreshed successfully",
        ),
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid refresh token");
  }
});

/*
|--------------------------------------------------------------------------
| CHANGE CURRENT PASSWORD
|--------------------------------------------------------------------------
*/
const changeCurrentUserPassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  if (!oldPassword || !newPassword) {
    throw new ApiError(400, "Old password and new password are required");
  }

  const user = await User.findById(req.user?._id);

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  // verify old password
  const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

  if (!isPasswordCorrect) {
    throw new ApiError(400, "Invalid old password");
  }

  // prevent same password
  if (oldPassword === newPassword) {
    throw new ApiError(400, "New password cannot be same as old password");
  }

  user.password = newPassword;

  await user.save({
    validateBeforeSave: false,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password changed successfully"));
});

/*
|--------------------------------------------------------------------------
| GET CURRENT USER
|--------------------------------------------------------------------------
*/
const getCurrentUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user?._id).select(
    "-password -refreshToken",
  );

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, user, "Current user fetched successfully"));
});

/*
|--------------------------------------------------------------------------
| FORGOT PASSWORD
|--------------------------------------------------------------------------
*/
const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;

  if (!email) {
    throw new ApiError(400, "Email is required");
  }

  const user = await User.findOne({
    email: email.toLowerCase().trim(),
  });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  // temporary token generation
  const resetToken = crypto.randomBytes(32).toString("hex");

  const resetTokenExpiry = Date.now() + 15 * 60 * 1000;

  user.resetPasswordToken = resetToken;
  user.resetPasswordExpiry = resetTokenExpiry;

  await user.save({
    validateBeforeSave: false,
  });

  // TODO:
  // send email here

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        resetToken,
      },
      "Password reset token generated",
    ),
  );
});

/*
|--------------------------------------------------------------------------
| RESET PASSWORD
|--------------------------------------------------------------------------
*/

const resetPassword = asyncHandler(async (req, res) => {
  const { token } = req.params;

  const { newPassword } = req.body;

  if (!newPassword) {
    throw new ApiError(400, "New password is required");
  }

  const user = await User.findOne({
    resetPasswordToken: token,
    resetPasswordExpiry: {
      $gt: Date.now(),
    },
  });

  if (!user) {
    throw new ApiError(400, "Reset token is invalid or expired");
  }

  user.password = newPassword;

  user.resetPasswordToken = undefined;
  user.resetPasswordExpiry = undefined;

  await user.save();

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Password reset successful"));
});

/*
|--------------------------------------------------------------------------
| EXPORTS
|--------------------------------------------------------------------------
*/
export {
  // auth
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  changeCurrentUserPassword,
  getCurrentUser,
  forgotPassword,
  resetPassword,
};

// /*
// |--------------------------------------------------------------------------
// | CURRENT SERVICES
// |--------------------------------------------------------------------------
// */
// const registerUser;                 // Create new account -- Done
// const loginUser; // Login with email/username
// const logoutUser; // Logout current device
// const refreshAccessToken; // Generate new access token
// const changeCurrentUserPassword; // Change current password
// const forgotPassword; // Send reset password mail/token
// const resetPassword; // Reset password using token
// const getCurrentUser; // Get logged in user

// /*
// |--------------------------------------------------------------------------
// | EMAIL VERIFICATION SERVICES
// |--------------------------------------------------------------------------
// */

// const verifyEmail; // Verify email using token/otp
// const resendVerificationEmail; // Resend verification email

// /*
// |--------------------------------------------------------------------------
// | OTP AUTH SERVICES
// |--------------------------------------------------------------------------
// */

// const sendOtp; // Send OTP to email/phone
// const verifyOtp; // Verify OTP login/register

// /*
// |--------------------------------------------------------------------------
// | OAUTH SERVICES
// |--------------------------------------------------------------------------
// */

// const googleLogin; // Google OAuth login
// const githubLogin; // GitHub OAuth login

// /*
// |--------------------------------------------------------------------------
// | SESSION MANAGEMENT SERVICES
// |--------------------------------------------------------------------------
// */

// const deleteSession; // Logout from one device/session
// const logoutFromAllDevices; // Logout from all devices

// /*
// |--------------------------------------------------------------------------
// | FUTURE OPTIONAL SERVICES
// |--------------------------------------------------------------------------
// */
// const refreshUserSession; // Refresh active session
// const revokeRefreshToken; // Revoke refresh token
// const loginWithPhone; // Phone login
// const verifyPhoneNumber; // Verify phone
// const enableTwoFactorAuth; // Enable 2FA
// const verifyTwoFactorAuth; // Verify 2FA
// const disableTwoFactorAuth; // Disable 2FA
// const generateBackupCodes; // Recovery codes
// const checkUsernameAvailability; // Username checker
// const checkEmailAvailability; // Email checker
// const deactivateAccount; // Self deactivate
// const reactivateAccount; // Reactivate account
// const deleteOwnAccount; // Self account delete
