const express = require('express');
const { addProduct, getProduct, updateProduct } = require("../controller/productcontroller");
const { verify } = require("../controller/usercontroller");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/add", verify, auth, addProduct);
router.get("/", getProduct);
router.put("/:id", updateProduct);

module.exports = router;