const express = require("express");
const { Signup, login, verify } = require("../controller/userController");

const u_router = express.Router();

u_router.post("/register", Signup);
u_router.post("/login", login);
u_router.get("/verify", verify, (req, res) => {
    res.send({ msg: "Success", user: req.user });
});

module.exports = u_router;