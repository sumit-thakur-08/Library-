import { Router } from "express";
import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

// Public
router.get("/", getAllCategories);
router.get("/:categoryId", getCategoryById);

// Admin protected
router.post("/categoryAdd", verifyJWT, createCategory);
router.patch("/:categoryId", verifyJWT, upload.none(), updateCategory);
router.delete("/:categoryId", verifyJWT, deleteCategory);

export default router;
