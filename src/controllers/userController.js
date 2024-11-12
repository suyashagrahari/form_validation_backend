import User from "../models/User.js";

export const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await new User(userData);
    await newUser.save();
    console.log("User data saved:", newUser);
    res
      .status(201)
      .json({ message: "User data saved successfully", userId: newUser._id });
  } catch (error) {
    console.error("Error saving user data:", error);
    res
      .status(500)
      .json({ message: "Error saving user data", error: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
  }
};
