const express=require("express");
const { add, get, update, deleteUser } = require("../controller/usercontroller");

const router=express.Router();
router.post("/add", add);
router.get("/get", get);
router.patch("/update/:id", update);
router.delete("/delete/:id", deleteUser);

module.exports=router;