const express = require('express');
var   router = express.Router()

const { uploadResults , getResult , getResultByRoll} = require('../controllers/results')
const { isSignedin , isAdmin } = require("../controllers/auth")
const {getUserById} = require('../controllers/user')

router.param("userId" , getUserById);

// isSignedin , isAdmin 
router.put("/postresults"  ,  uploadResults);


router.get("/getresult/:userId"  , getResult)

router.put("/getresultbyroll" , getResultByRoll)


module.exports = router;