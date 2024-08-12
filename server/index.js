const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const routing = require("./routes/allroutes");

require("dotenv").config();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

const main = async () => {
  try {
    await app.listen(4000);
    console.log("server works on port 4000");
    mongoose.connect(
      "mongodb+srv://dominic91960:undertaker0@cluster0.e7rl39w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
};

main();

app.use("/api/", routing);

app.get("/", (req, res) => {
  try {
    res.json("wroks");
  } catch (error) {
    res.json(error);
  }
});
