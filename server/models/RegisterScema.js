const mongoose = require("mongoose")
const {Schema, model} = mongoose;

const userdata = new Schema({
    Usern : {type : String, required: true},
    Email : {type: String, required: true, unique: true},
    Password : {type: String, required: true}
});

module.exports = model("register-user", userdata);