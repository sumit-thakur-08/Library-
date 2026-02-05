import fs from "fs";
import { uploadToCloudinary } from "../utils/cloudinary.js";
import { Book } from "../models/book.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// Create book
export const createBook = async (req, res) => {
  const {
    title,
    author,
    publisher,
    publishedYear,
    isbn,
    description,
    categoryId,
    totalCopies,
  } = req.body;

  if (!title || !author || !isbn || !categoryId || !totalCopies) {
    throw new ApiError(400, "Required fields missing");
  }

  const coverImagePath = req.file?.path;

  if (!coverImagePath) {
    throw new ApiError(400, "Cover image is required");
  }

  const cloudinaryResponse = await uploadToCloudinary(coverImagePath);

  // local file delete
  fs.unlinkSync(coverImagePath);

  const book = await Book.create({
    title,
    author,
    publisher,
    publishedYear,
    isbn,
    description,
    categoryId,
    totalCopies,
    availableCopies: totalCopies,
    coverImageUrl: cloudinaryResponse.secure_url,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, book, "Book created with image"));
};

// get all book
export const getAllBooks = async (req, res) => {
  const books = await Book.find()
    .populate("categoryId", "name")
    .sort({ createdAt: -1 });

  return res.status(200).json(new ApiResponse(200, books, "Books fetched"));
};

// Get book by Id
export const getBookById = async (req, res) => {
  const { bookId } = req.params;

  const book = await Book.findById(bookId).populate("categoryId", "name");

  if (!book) {
    throw new ApiError(404, "Book not found");
  }

  return res.status(200).json(new ApiResponse(200, book, "Book fetched"));
};

// Update book
export const updateBook = async (req, res) => {
  const { bookId } = req.params;

  const book = await Book.findByIdAndUpdate(bookId, req.body, { new: true });

  if (!book) {
    throw new ApiError(404, "Book not found");
  }

  return res.status(200).json(new ApiResponse(200, book, "Book updated"));
};

// delete book
export const deleteBook = async (req, res) => {
  const { bookId } = req.params;

  const book = await Book.findByIdAndDelete(bookId);
  if (!book) {
    throw new ApiError(404, "Book not found");
  }

  return res.status(200).json(new ApiResponse(200, null, "Book deleted"));
};
