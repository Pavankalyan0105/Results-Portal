const User = require("../models/user");
const { check, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");



exports.signup = (req, res) => {

      console.log("A user trying to signup");

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array()[0].msg });
    }


    const user = new User(req.body);
    user.save((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        err: "NOT able to save user in DB"
      });
      }
      res.json(user);
    });
};


exports.signin = (req, res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
      return res.status(400).json({
        err: errors.array(),
        msg:"Error in sent details"

      });
    }
  
    const {email , password} = req.body;

    console.log(req.body);

    User.findOne({ email:req.body.email}).exec( 
      (err, user) => {
      if (err || !user) {
        return res.status(400).json({
          error: "USER email does not exists",
        })
      }

      if(!user.authenticate(password)){
        return res.status(401).json({
          error : "email and password do not matc"
        })
      }

      // create token
      const token = jwt.sign({id : user._id} , process.env.SECRET);

      // put token in cookie
      res.cookie("token" , token , { expire : new Date()+99});

      // send res to frontend

      const {_id , name , email , role} = user;
      return res.json({
        token , 
        user
      })
    })

  

}



exports.isSignedin = expressJwt({
  secret:process.env.SECRET,
  userProperty:"auth",
  algorithms: ['HS256']
});


exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      error: "You are not Faculty, Access denied"
    });
  }
  next();
};


// exports.isAuthenticated = (req, res, next) => {
//   let checker = req.profile && req.auth && req.profile._id == req.auth._id;
//   if (!checker) {
//     return res.status(403).json({
//       error: "ACCESS DENIED"
//     });
//   }
//   next();
// };