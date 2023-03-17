var mongoose = require('mongoose');

var Schema = mongoose.Schema;
const menuSchema = new Schema({
        title:{type:String,minLenght:3,required:true},
        link:{type:String,required:true},
        icon:{type:String},
        parent:{type:Number,default:0},
        allowDelete:{type:Boolean,default:false},
        display:{type:Boolean,default:true},
        language :{type:String},
        order:{type:Number,minLenght:1}
        });
module.exports = mongoose.model('menus', menuSchema);
