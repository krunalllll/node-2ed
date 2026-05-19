// categoryController.js

const categoryModel = require("../model/categoryModel");

// Add Category
const addCategory = async (req, res) => {
  try {
    const data = await categoryModel.create(req.body);
    res.send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Get Category
const getCategory = async (req, res) => {
  try {
    const data = await categoryModel.find();
    res.send(data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  addCategory,
  getCategory,
};
