import mongoose from "mongoose";
import { Book } from "../models/book.model.js";
import { Category } from "../models/category.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

/**
 * CREATE CATEGORY
 */
export const createCategory = async (req, res) => {
  const { name, description } = req.body;

  if (!name) {
    throw new ApiError(400, "Category name is required");
  }

  const existingCategory = await Category.findOne({ name });
  if (existingCategory) {
    throw new ApiError(409, "Category already exists");
  }

  const category = await Category.create({
    name,
    description,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, category, "Category created successfully"));
};

/**
 * GET ALL CATEGORIES
 */
export const getAllCategories = async (req, res) => {
  const categories = await Category.find().sort({ createdAt: -1 });

  return res
    .status(200)
    .json(new ApiResponse(200, categories, "Categories fetched successfully"));
};

/**
 * GET CATEGORY BY ID
 */
export const getCategoryById = async (req, res) => {
  const { categoryId } = req.params;

  const category = await Category.findById(categoryId);
  if (!category) {
    throw new ApiError(404, "Category not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, category, "Category fetched successfully"));
};

/**
 * UPDATE CATEGORY
 */
export const updateCategory = async (req, res) => {
  const { categoryId } = req.params;
  const { name, description } = req.body;
  console.log(req.body);

  // ✅ ObjectId check
  if (!mongoose.Types.ObjectId.isValid(categoryId)) {
    throw new ApiError(400, "Invalid category ID");
  }

  // ✅ Duplicate name check
  if (name) {
    const existingCategory = await Category.findOne({
      name,
      _id: { $ne: categoryId },
    });

    if (existingCategory) {
      throw new ApiError(409, "Category already exists");
    }
  }

  const category = await Category.findByIdAndUpdate(
    categoryId,
    { name, description },
    { new: true },
  );
  console.log(category);

  if (!category) {
    throw new ApiError(404, "Category not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, category, "Category updated successfully"));
};

/**
 * DELETE CATEGORY
 */
export const deleteCategory = async (req, res) => {
  const { categoryId } = req.params;

  // ✅ ObjectId check
  if (!mongoose.Types.ObjectId.isValid(categoryId)) {
    throw new ApiError(400, "Invalid category ID");
  }

  // ❗ Books linked check
  const booksCount = await Book.countDocuments({ categoryId });

  if (booksCount > 0) {
    throw new ApiError(
      400,
      "Cannot delete category. Books are linked to this category",
    );
  }

  const category = await Category.findByIdAndDelete(categoryId);
  if (!category) {
    throw new ApiError(404, "Category not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, null, "Category deleted successfully"));
};
