const productModel = require("../model/productModel");

// Add Product
const addProduct = async (req, res) => {
    try {
        const data = await productModel.create(req.body);
        res.send(data);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Get Product
const getProduct = async (req, res) => {
    try {
        const data = await productModel.find().populate("categoryId");
        res.send(data);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

// Update Product
const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;

        const data = await productModel.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        res.send(data);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

module.exports = {
    addProduct,
    getProduct,
    updateProduct,
};