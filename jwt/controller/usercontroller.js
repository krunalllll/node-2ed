const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");

const Signup = async (req, res) => {
    try {
        const data = await userModel.create(req.body);
        
        // Generate JWT token on signup
        const payload = {
            username: data.username,
            role: data.role,
            id: data._id
        };
        const token = jwt.sign(payload, "secreat-key");
        
        res.send({ user: data, token: token });
    } catch (err) {
        res.status(500).send("Error creating user");
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;
    const data = await userModel.findOne({ username });

    if (!data) {
        return res.send("username not exist");
    }
    if (data.password !== password) {
        return res.send("password mismatch");
    }

    const payload = {
        username: data.username,
        role: data.role,
        id: data._id
    };

    const token = jwt.sign(payload, "secreat-key");
    res.send({ token });
};

const verify = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(" ")[1];

        if (!token) return res.status(401).send("Token missing");

        const info = jwt.verify(token, "secreat-key");
        req.user = info;
        next();
    } catch (err) {
        res.status(401).send("Invalid Token");
    }
};

module.exports = { Signup, login, verify };