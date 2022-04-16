var   express = require('express')
const { check, validationResult } = require('express-validator');
var   router = express.Router()

const { signup , signin } = require("../controllers/auth")



router.post('/signup'  ,[
    check('email').isEmail().withMessage('Email is required'),
    check("password").isLength({min : 4}).withMessage('must be at  4 chars long')
] , signup);


router.post('/signin' ,
    check('email' , "No valid email").isEmail(),
    check('password' , "Passowrd should be atleast 3 characters").isLength({ min: 4 })
, signin);

module.exports = router;
