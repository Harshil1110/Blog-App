const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("./db");
const user = require("./routes/User")
const blog = require("./models/Blog");

app.use(express.json());
app.use("/user",user);
app.use("/blog",blog)

app.listen(PORT,()=>{
    console.log(`Server is listening on ${PORT}`);
})