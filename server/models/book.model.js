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
  },
  { timestamps: true },
);

export const Book = mongoose.model("Book", bookSchema);
