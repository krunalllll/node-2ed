const express = require("express");
const db = require("./config/db"); // Make sure your DB connection is here
const u_router = require("./routes/userroutes");
const router = require("./routes/productroutes");
const C_router = require("./routes/categoryroutes");

const app = express();
app.use(express.json());

app.use("/", router);
app.use("/user", u_router);
app.use("/category", C_router);

app.listen(8979, () => {
    console.log("server connect on port 8979");
});