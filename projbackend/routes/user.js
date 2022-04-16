const express = require('express')

const router = express.Router()


const { getUserById , getUser , updateUser} = require('../controllers/user')
const { isSignedin   ,isAdmin } = require('../controllers/auth')


router.param("userId" , getUserById);

router.get("/user/:userId"   ,  getUser);


 

module.exports = router;