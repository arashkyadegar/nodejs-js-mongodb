var mongoose = require('mongoose');

var Schema = mongoose.Schema;
const articleGroupSchema = new Schema({
      title:{type:String,minLenght:3}
        });
module.exports = mongoose.model('articleGroups', articleGroupSchema);
