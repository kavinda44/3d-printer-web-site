const express = require("express");
const router = express.Router();

const {adduserData} = require('../controller/signinCon')
const {findregistered, tokencheck, loggingout} = require('../controller/loginCon')

router.route("/register").post(adduserData)
router.route("/login").post(findregistered)
router.route("/logout").post(loggingout)
router.route("/").get(tokencheck)

module.exports = router;