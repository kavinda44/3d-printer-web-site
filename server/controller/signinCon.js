const Register = require("../models/RegisterScema")
const bcrypt = require("bcryptjs")

const hashingSalt = bcrypt.genSaltSync(8)


const adduserData = async (req,res) => {
    try {
        const {Usern, Email, Password} = req.body;
        const regadd = await Register.create({Usern, Email, Password: bcrypt.hashSync(Password, hashingSalt)})
        res.json(regadd)
    } catch (error) { 
        res.json("Error in controler "+error)
    }
}

module.exports = {adduserData}