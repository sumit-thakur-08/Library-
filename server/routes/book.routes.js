import { Router } from "express";
import {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} from "../controllers/book.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

// Public
router.get("/", getAllBooks);
router.get("/:bookId", getBookById);

// Admin protected
router.post("/upload", verifyJWT, upload.single("coverImage"), createBook);
router.put("/:bookId", verifyJWT, updateBook);
router.delete("/:bookId", verifyJWT, deleteBook);

export default router;
