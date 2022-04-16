const User = require("../models/user");


async function returnSem(semValue , result , user){

    console.log(result)

    if(semValue === "sem11"){
        const idx = user.subCodes.indexOf(result.Subcode);

        if(idx > -1) {
            console.log("Already there");
            if(result.Grade.length === 1){
                for(var i=0;i<user.sem11.length;i++){
                    if(user.sem11[i].Subcode === user.subCodes[idx]){
                        console.log("YES");
                        user.sem11[i] = result;
                        break;
                    }
                }
            }
        }
        else{
             user.sem11.push(result);
            user.subCodes.push(result.Subcode);
        }
    }
    await user.save();
}


exports.uploadResults = async (req , res) => {

    const semValue = req.body.sem;
    const results = req.body.result;

  

    // return res.json({msg:"Tsting from frontend"})

    results.map( (result) => {
            User.findOne({"regdno":result.Htno}).exec(
                async (err , user) => {
                    if(err || !user){
                        return res.json("Something went wrong")
                    }
                    await returnSem(semValue  , result , user)

                }
            )
    } )

    return res.json({"msg ":"uplloaded succesfully"})
}


exports.getResult = (req , res) => {
    const {regdno} = req.body;

    User.find({regdno: regdno}).exec(
        (err , user) => {
            if(err || !user){
                return res.json({
                    message:"something went wrong"
                })
            }
            return res.json(user);
        }
    )

    
}


exports.getResultByRoll = (req , res) => {
    const roll = req.body.RollNo;
    console.log("req",req.body)

    User.find({regdno: "19L31A1201"}).exec(
        (err , user) => {
            if(err  || !user)
                return res.json({
                    msg: err.message
                })
                
            return res.json(user)
        }
    )
}