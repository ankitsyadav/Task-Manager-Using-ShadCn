import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required..."],
  },
  email: {
    type: String,
    required: [true, "Email is required..."],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required..."],
  },
  about: String,
  profileUrl: String,
});

export const User =
  mongoose.models.users || mongoose.model("users", UserSchema);
