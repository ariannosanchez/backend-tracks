const express = require("express");
const router = express.Router();
const { matchedData } = require("express-validator");
const { usersModel } = require("../models/index")
const { validatorRegisterItem, validatorLoginItem } = require("../validators/auth");
const { encrypt, compare } = require("../utils/handlePassword")
const { tokenSign } = require("../utils/handleJWT");
const { registerCtrl, loginCtrl } = require("../controllers/auth");


router.post("/register", validatorRegisterItem, registerCtrl)
router.post("/login", validatorLoginItem, loginCtrl)

module.exports = router