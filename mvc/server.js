const express=require("express");
const db=require("./confing/db");
const router=require("./routes/userroutes");

const app=express();

app.use(express.json());
app.set("view engine","ejs");
app.use("/user",router);



app.listen(9002,()=>{
    console.log("server running on port 9002")
})