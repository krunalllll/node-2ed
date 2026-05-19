const express = require("express");
const { addCategory, getCategory } = require("../controller/categoryController");

const C_router = express.Router();

// Category add karne ke liye
C_router.post("/add", addCategory);

// Saari categories fetch karne ke liye
C_router.get("/", getCategory);

module.exports = C_router;