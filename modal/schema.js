import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: string,
    required: true,
  },
  lastName: {
    type: string,
    required: true,
  },
  email: {
    type: string,
    required: true,
    unique: true,
  },
  password: {
    type: string,
    required: true,
  },
});

module.exports = mongoose.model.User || mongoose.model("Accounts", userSchema);
