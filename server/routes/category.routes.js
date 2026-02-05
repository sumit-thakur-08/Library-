import { Router } from "express";
import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Public
router.get("/", getAllCategories);
router.get("/:categoryId", getCategoryById);

// Admin protected
router.post("/categoryAdd", verifyJWT, createCategory);
router.put("/:categoryId", verifyJWT, updateCategory);
router.delete("/:categoryId", verifyJWT, deleteCategory);

export default router;
