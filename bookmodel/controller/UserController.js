const UserModel = require("../model/UserModel");

const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        
        // Check if user already exists
        const existingUser = await UserModel.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists with this email or username." });
        }

        const newUser = new UserModel({
            username,
            email,
            password
        });

        await newUser.save();
        res.status(201).json({ message: "Signup successful", user: { id: newUser._id, username: newUser.username, email: newUser.email } });
    } catch (error) {
        res.status(500).json({ message: "Error in signup", error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Compare password
        if (password !== user.password) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        res.status(200).json({ message: "Login successful", user: { id: user._id, username: user.username, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: "Error in login", error: error.message });
    }
};

module.exports = { signup, login };
