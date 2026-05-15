const express = require("express")
const db=require("./config/db")

const U_router=require("./routes/userRoute")
const B_router = require("./routes/BookRoute") 
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true })) // added in case forms are used later
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.send("<h1>Welcome to the MVC App</h1><br><a href='/book/all'>See all books</a>");
})

// app.use("/user",U_router)
app.use("/book", B_router)

app.listen(8990, () => {
    console.log("server listen on http://localhost:8990")
})