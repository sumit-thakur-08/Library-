import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      minlength: 3,
      maxlength: 20,
      index: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
      index: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    phone: {
      type: String,
      trim: true,
      default: "",
    },

    // ================= AUTH =================

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
      select: false,
    },

    refreshToken: {
      type: String,
      select: false,
    },

    // ================= ROLE =================

    role: {
      type: String,
      enum: ["ADMIN", "LIBRARIAN", "STUDENT"],
      default: "STUDENT",
    },

    // ================= PROFILE =================

    avatar: {
      url: {
        type: String,
        default: "",
      },

      public_id: {
        type: String,
        default: "",
      },
    },

    bio: {
      type: String,
      default: "",
      maxlength: 300,
    },

    // ================= ACCOUNT =================

    is_active: {
      type: Boolean,
      default: true,
    },

    is_email_verified: {
      type: Boolean,
      default: false,
    },

    last_login: {
      type: Date,
    },
    // ================= LIBRARY =================

    library_id: {
      type: String,
      unique: true,
      trim: true,
    },

    address: {
      type: String,
      trim: true,
      default: "",
    },

    total_fine: {
      type: Number,
      default: 0,
    },
    // ================= PASSWORD RESET =================

    forgot_password_token: {
      type: String,
      select: false,
    },

    forgot_password_expiry: {
      type: Date,
      select: false,
    },
  },
  {
    timestamps: true,
  },
);

// ================= PASSWORD HASH =================

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);

  next();
});

// ================= PASSWORD CHECK =================

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// ================= ACCESS TOKEN =================

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      role: this.role,
      username: this.username,
      name: this.name,
    },

    process.env.ACCESS_TOKEN_SECRET,

    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY || "30m",
    },
  );
};

// ================= REFRESH TOKEN =================

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },

    process.env.REFRESH_TOKEN_SECRET,

    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY || "10d",
    },
  );
};

export const User = mongoose.model("User", userSchema);
