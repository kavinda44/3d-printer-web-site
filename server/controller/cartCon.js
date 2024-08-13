const Register = require("../models/RegisterScema")
const jwt = require("jsonwebtoken")
const jwtsecret = "AHIGI78"

const addcartdata = async (req,res) => {
    try {
        const {val, name, desc, img, quantity, pr} = req.body;

        const token = await req.cookies.token;

        const decodedToken = await jwt.verify(token, jwtsecret);
        const email = decodedToken.email;

        // const regadd = await Register.findOneAndUpdate({Email : email},{Cart: {ident: val, product: name, desc: desc, img: img, qty: quantity, price: pr}})

        const user = await Register.findOne({ Email: email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the product with the same ident already exists in the Cart array
    const existingProductIndex = user.Cart.findIndex(
      (item) => item.ident === val
    );

    if (existingProductIndex !== -1) {
      // If the product exists, update it
      user.Cart[existingProductIndex] = {
        ident: val,
        product: name,
        desc: desc,
        img: img,
        qty: quantity,
        price: pr,
      };
    } else {
      // If the product does not exist, push a new object to the Cart array
      user.Cart.push({
        ident: val,
        product: name,
        desc: desc,
        img: img,
        qty: quantity,
        price: pr,
      });
    }

    // Save the updated user document
    const updatedUser = await user.save();

        console.log(email)
        res.json(updatedUser);
    } catch (error) { 
        res.json("Error in controler "+error)
    }
}

const getcartdata = async (req,res) => {
    try {

        const token = await req.cookies.token;

        const decodedToken = await jwt.verify(token, jwtsecret);
        const email = decodedToken.email;
        const obj = await Register.findOne({ Email: email })
        // res.json({obj})
        res.send(obj)
    } catch (error) {
        
    }
}

module.exports = {addcartdata, getcartdata}