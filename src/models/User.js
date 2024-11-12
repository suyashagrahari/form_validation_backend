import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  personalInfo: {
    firstName: String,
    lastName: String,
    email: String,
    occupation: String,
    companyDetails: {
      companyName: String,
      position: String,
    },
    additionalEmails: [String],
  },
  accountDetails: {
    username: String,
    password: String,
    preferences: {
      notifications: Boolean,
      twoFactorAuth: Boolean,
    },
    accountType: String,
    securityQuestions: [
      {
        question: String,
        answer: String,
      },
    ],
  },
  preferences: {
    theme: String,
    notifications: Boolean,
    language: String,
    accessibility: Boolean,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
