// Kaun user
// Kaunsi book
// Kab issue hua
// Kab return hua
// Kitna fine laga

import mongoose from "mongoose";

const issueSchema = new mongoose.Schema(
  {
    // ================= USER =================

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // ================= BOOK =================

    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },

    // ================= ISSUE DETAILS =================

    issueDate: {
      type: Date,
      default: Date.now,
    },

    dueDate: {
      type: Date,
      required: true,
    },

    returnDate: {
      type: Date,
      default: null,
    },

    // ================= STATUS =================

    status: {
      type: String,
      enum: ["ISSUED", "RETURNED", "OVERDUE"],
      default: "ISSUED",
      index: true,
    },

    // ================= FINE =================

    fineAmount: {
      type: Number,
      default: 0,
      min: 0,
    },

    isFinePaid: {
      type: Boolean,
      default: false,
    },

    // ================= ISSUED BY =================

    issuedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // ================= RETURN VERIFIED BY =================

    returnedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    // ================= NOTES =================

    notes: {
      type: String,
      trim: true,
      default: "",
    },
  },

  {
    timestamps: true,
  },
);

export const Issue = mongoose.model("Issue", issueSchema);
