import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    author: {
      type: String,
      required: true,
    },

    publisher: {
      type: String,
    },

    publishedYear: {
      type: Number,
    },

    isbn: {
      type: String,
      required: true,
      unique: true,
    },

    description: {
      type: String,
    },

    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    totalCopies: {
      type: Number,
      required: true,
      min: 1,
    },

    availableCopies: {
      type: Number,
      required: true,
    },

    coverImageUrl: {
      type: String,
    },
    status: {
      type: String,
      enum: ["AVAILABLE", "OUT_OF_STOCK"],
      default: "AVAILABLE",
    },
    language: {
      type: String,
      default: "English",
    },
    shelfLocation: {
      type: String,
      trim: true,
    },
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

export const Book = mongoose.model("Book", bookSchema);
