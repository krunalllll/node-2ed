const express = require("express");
const db = require("./config/db");
const User = require("./model/UserModel");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is working!");
});

// user add karne ke liye
app.post("/User", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = new User({
      username,
      password
    });

    const savedUser = await user.save();

    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// user ka data get karne ke liye
app.get("/User", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// user ka data id ke through get karne ke liye
app.get("/User/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// update user
app.patch("/User/:id", async (req, res) => {
  try {
    const { username, password } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { username, password },
      { new: true }
    );

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// user ko id ke through delet karne ke liye
app.delete("/User/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted successfully", deletedUser });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(8203, () => {
  console.log("Server running on port 8203");
});