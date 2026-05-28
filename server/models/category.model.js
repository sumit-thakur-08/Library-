import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true, // duplicate categories avoid
    },

    description: {
      type: String,
      trim: true,
    },

    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
  },
  { timestamps: true },
);

export const Category = mongoose.model("Category", categorySchema);
