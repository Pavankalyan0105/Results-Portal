var mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");

var userSchema = new mongoose.Schema(
  {
    regdno: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
      default:"-1"
    },
    name:{
      type:String
    },
     ryear:{
         type:Number,
         required: true,
         default:-1
     },
     email:{
         type:String,
         required:true
     },
     branch:{
         type:String,
         required: true
     },
    encry_password: {
      type: String,
      required: true
    },
    salt:String
    ,
    role:{
        type:Number,
        default:0
    },
    semesters:{
      type:Array,
      default:[]
    },
 
    sem11:{
          type: Array,
          default: []
    },
    sem12:{
          type: Array,
          default: []
    },
      sem21:{
          type: Array,
          default: []
      },
      sem22:{
          type: Array,
          default: []
      },
      sem31:{
          type: Array,
          default: []
      },
      sem32:{
          type: Array,
          default: []
      },
      sem41:{
          type: Array,
          default: []
      },
      sem42:{
          type: Array,
          default: []
      },
      subCodes:{
        type: Array,
        default: []
      }
  },
    
    { timestamps: true }
);

userSchema
  .virtual("password")
  .set(function(password) {
    this._password = password;
    this.salt = uuidv1();
    this.encry_password = this.securePassword(password);
  })
  .get(function() {
    return this._password;
  });

userSchema.methods = {
  authenticate: function(plainpassword) {
    return this.securePassword(plainpassword) === this.encry_password;
  },

  securePassword: function(plainpassword) {
    if (!plainpassword) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");
    } catch (err) {
      return "";
    }
  }
};

module.exports = mongoose.model("User", userSchema);