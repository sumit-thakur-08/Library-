import { Router } from "express";
import {
  changeCurrentUserPassword,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
} from "../controllers/user.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// http:localhodt:8000/api/v1/users/register

// Adding middleware
router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

// secured route // User routes
router.route("/logout").post(verifyJWT, verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/change-password").post(verifyJWT, changeCurrentUserPassword);

export default router;
