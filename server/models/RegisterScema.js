const mongoose = require("mongoose")
const {Schema, model} = mongoose;

const CartSchema = new mongoose.Schema({
    ident: {
        type: String, 
        unique: true
    },
    product: {
      type: String,
    },
    desc: {
      type: String,
    },
    img: {
      type: String,
    },
    qty: {
        type: String,
      },
    price: {
        type: Number,
    }
  });

const userdata = new Schema({
    Usern : {type : String, required: true},
    Email : {type: String, required: true, unique: true},
    Password : {type: String, required: true},
    Cart: [CartSchema]
});

module.exports = model("register-user", userdata);