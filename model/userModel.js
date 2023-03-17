var mongoose = require('mongoose');
const Joi=require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const bcrypt=require('bcrypt');
const jwt = require('jsonwebtoken');

var Schema = mongoose.Schema;
        var userSchema = new Schema({
          name:{type:String},
          given_name:{type:String},
          family_name:{type:String},
          picture:{type:String},
        });
//
          function validateUser(user){
                        var schema = Joi.object().keys({
                          name:Joi.string().min(3),
                          given_name:Joi.string().min(3),
                          family_name:Joi.string().min(3),
                          picture:Joi.string().min(3),
                      });
                        return Joi.validate(user,schema);
          }

  userSchema.methods.setPassword =async function(password) {
  //this.salt = crypto.randomBytes(16).toString('hex');
  this.salt=await bcrypt.genSalt(11);
  //this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  this.hash=await bcrypt.hash(password,this.salt)
};

userSchema.methods.validatePassword =async function(password) {
  const rslt =await bcrypt.compare(password,this.hash);
  return rslt;
};

userSchema.methods.generateJWT = function() {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign({
    email: this.email,
    id: this._id,
    exp: parseInt(expirationDate.getTime() / 1000, 10),
  }, 'secret');
}

userSchema.methods.toAuthJSON = function() {
  return {
    _id: this._id,
    email: this.email,
    token: this.generateJWT(),
  };
};

exports.validate = validateUser;
exports.UserClass = mongoose.model('users', userSchema);
