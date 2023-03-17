

var mongoose = require('mongoose');

var {userSchema}=require('./userModel.js');
var {articleGroupSchema}=require('./articleGroupSchema.js');
var {commentSchema}= require('./commentSchema.js');


var Schema = mongoose.Schema;
const articleSchema = new Schema({
user:{
  type:mongoose.Schema.Types.ObjectId,
  ref:'users'
},
      rate:{type:Number,default:1},
      publishStatus:{type:Boolean,default:true},
      showPrint:{type:Boolean,default:true},
      showPdf:{type:Boolean,default:true},
      showAuthor:{type:Boolean,default:true},
      title:{type:String},
      description:{type:String},
      publishDate:{type:Date,default:Date.now},
      publishTime:{type:Date,default:Date.now},
      imageUrl:{type:String},
      author:{type:String},
      language:{type:String},
      fileUrl:{type:String},
      tags:""
      //comment
        });
module.exports = mongoose.model('articles', articleSchema);
