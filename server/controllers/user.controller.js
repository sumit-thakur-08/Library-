import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";

//refresh and genrate acccess token
const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId); // Find user in DB

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    // Generate tokens
    const accessToken = user.generateAccessToken(); // Reference user.model.js
    const refreshToken = user.generateRefreshToken();
    // console.log("Access Token:", accessToken, "Refresh Token:", refreshToken);

    // Update user with new refresh token
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    console.error("Error generating tokens:", error);
    throw new ApiError(
      500,
      "Something went wrong while generating refresh and access token",
    );
  }
};

// register user
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, username, password } = req.body;
  if (
    [name, email, username, password].some(
      (field) => !field || field.trim() === "",
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  // Validation for email or userName already exit or not
  const existUser = await User.findOne({
    $or: [{ username }, { email }],
  }); // return true or false

  if (existUser) {
    throw new ApiError(409, "User with email or user name already exists ");
  }

  // Db Entry
  const user = await User.create({
    name,
    email,
    password,
    username,
  });
  console.log(user);

  const token = await generateAccessAndRefreshToken(user._id);
  user.save(); // save user

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken",
  ); // return database value except password and refreshtoken

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, createdUser, "user registered successfully "));
});

// Login user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "username/email and password are required!");
  }

  const isEmail = email.includes("@");

  const user = await User.findOne({
    $or: [
      { email: isEmail ? email : undefined },
      { username: !isEmail ? email : undefined },
    ],
  });

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);
  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid password");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id,
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken",
  );

  return res.status(200).json(
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

// logout user
const logoutUser = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  try {
    // Remove the refreshToken from the user document
    await User.findByIdAndUpdate(
      userId,
      { $unset: { refreshToken: 1 } }, // this remove the refreshToken feild
      { new: true },
    );

    // set cookie options
    const cookieOptions = {
      httpOnly: true,
      sameSite: "Strict",
    };
    // delete the cookies
    res.clearCookie("accessToken", cookieOptions);
    res.clearCookie("refreshToken", cookieOptions);

    return res
      .status(200)
      .json(new ApiResponse(200, {}, "User logged out successfully"));
  } catch (error) {
    console.log("Something went wrong whlile logout user::", error);
    throw new ApiError(400, "User logout failed");
  }
});

// refresh token
const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "Unauthorized request");
  }

  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET,
    );

    const user = await User.findById(decodedToken?._id);

    if (!user) {
      throw new ApiError(401, "Invalid refresh token");
    }

    if (incomingRefreshToken !== user?.refreshToken) {
      throw new ApiError(401, "Refresh token is expired or used");
    }

    const option = {
      httpOnly: true,
      secure: true,
    };

    const { accessToken, newRefreshToken } =
      await generateAccessAndRefreshToken(user._id);

    return res
      .status(200)
      .cookie("accessToken", accessToken, option)
      .cookie("refreshToken", newRefreshToken, option)
      .json(
        new ApiResponse(
          200,
          {
            accessToken,
            refreshToken: newRefreshToken,
          },
          "Access Token Refreshed",
        ),
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "Inavalid refresh token");
  }
});

// change current password
const changeCurrentUserPassword = asyncHandler(async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const user = await User.findById(req.user?._id);
  const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

  if (!isPasswordCorrect) {
    throw new ApiError(400, "Invalid old password");
  }

  user.password = newPassword;
  await user.save({ validateBeforeSave: false });

  return res
    .status(200)
    .json(new ApiError(200, {}, "Password change successfully!!!"));
});

export {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  changeCurrentUserPassword,
};
