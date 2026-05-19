const express = require("express")
const db=require("./config/db")

const B_router = require("./routes/BookRoute");
const U_router = require("./routes/UserRoute");
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true })) // added in case forms are used later
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index");
})


app.use("/book", B_router);
app.use("/user", U_router);

app.listen(8990, () => {
    console.log("server listen on http://localhost:8990")
})