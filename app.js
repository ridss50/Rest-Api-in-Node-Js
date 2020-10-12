const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const url = "mongodb://localhost/todolistdb";

const app = express();
app.use(cors());

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("Connected...");
});

app.use(express.json());

const todoRouter = require("./routers/router");
app.use("/todos", todoRouter);

app.listen(9000, () => {
  console.log("server started");
});

//for run use nodemon run start
