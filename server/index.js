const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require('body-parser');
const routing = require('./routes/allroutes')

require("dotenv").config();
app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use(cors({
    credentials: true,
    origin: "http://localhost:3000",
}));

const main = async () => {
    try {
        await app.listen(4000)
        console.log("server works on port 4000")
        mongoose.connect(process.env.MONGO_URL);
        console.log("database connected")
    } catch (error) {
        console.log(error)
    }
}

main();

app.use("/api/", routing)

app.get('/', (req,res) => {
    try {
        res.json("wroks")
    } catch (error) {
        res.json(error)
    }
})