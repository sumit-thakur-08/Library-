import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

// Middlaware AUthentication

export const verifyJWT = asyncHandler(async (req, res, next) => {
  const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer", "");

  if (!token) {
    req.user = null;
    return next();
  }

  try {
    const decodeToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodeToken?._id).select(
      "-password -refreshToken",
    );
    req.user = user || null;
    next();
  } catch {
    req.user = null;
    next();
    throw new ApiError(401, error?.message || "Invalid Access Token");
  }
});
