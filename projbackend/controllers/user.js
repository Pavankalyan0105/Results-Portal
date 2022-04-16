const User = require("../models/user")

exports.getUserById = (req , res , next , id)=>{

    User.findById(id).exec( (err , user) =>{
        if(err || !user){
            return res.status(400).json({
                message: "No user found"
            })
        }
        req.profile = user;
        next();

    })
}

exports.getUser = (req , res)=>{
    req.profile.salt = undefined;
    req.profile.encry_password = undefined;

    return res.json(req.profile);
}

exports.getResultByRoll = (req , res) => {
    const roll = req.regdno;

    User.find({regdno: roll}).exec(
        (err , user) => {
            return res.json(user)
        }
    )
}