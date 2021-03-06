var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    points: {
        type:String,
        required:false
    },
    email:{
        type:String,
        required:false
    },
    password:{
        type:String,
        required:false
    },
    date:{
        type:Date,
        default:Date.now
    }

});

mongoose.model('Users', UserSchema);