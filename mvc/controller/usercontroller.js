const user=require("../model/usermodel");

const add=async(req,res)=>{
    const data=await user.create(req.body)
    res.json(data);
}

const get=async (req, res) => {
  const data = await user.find({});
  res.json(data);
};

const update=async(req,res)=>{
    const {id} = req.params;
    const data = await user.findByIdAndUpdate(id, req.body, {new: true});
    res.json(data);
}

const deleteUser=async(req,res)=>{
    const {id} = req.params;
    const data = await user.findByIdAndDelete(id);
    res.json({ message: "User deleted successfully", data });
}

module.exports = { add, get, update, deleteUser };