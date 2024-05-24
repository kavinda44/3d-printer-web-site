const Registered = require("../models/RegisterScema")
const jwt = require("jsonwebtoken")
const jwtsecret = "AHIGI78"
const bcrypt = require("bcryptjs")



const findregistered = async (req,res) => {
    const {Logemail, Logpassword} = req.body;
    try {
        const finduser = await Registered.findOne({Email:Logemail});
        if(finduser){
            const passOk = bcrypt.compareSync(Logpassword, finduser.Password)
            if(passOk){
                const token = jwt.sign({email: finduser.Email, id: finduser._id, name: finduser.Usern}, jwtsecret, {expiresIn: '1h' })
                res.cookie('token', token, {httpOnly: true});
                return res.json(finduser);
                
            }else{
                return res.status(401).json("pass not ok")
            }
        }else{
            return res.status(404).send("not found")
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}

const tokencheck = async (req,res) => {
    try {
        const token = req.cookies.token;
        if(token) {
            jwt.verify(token, jwtsecret, {}, (err, user) => {
                if (err) throw err;
                res.send(user);
                console.log("t")
            });
            // res.json(user);
            console.log("token exits")
        }else {
            res.json(null);
        }
        // console.log("what ever token "+token)
    } catch (error) {
        console.log(error)
    }
    console.log("function is run")
}

const loggingout = async (req,res) => {
    try {
        res.clearCookie('token');
        res.status(200).json("loggied out")
    } catch (error) {
        res.json(error)
    }
}


module.exports = {findregistered , tokencheck, loggingout}