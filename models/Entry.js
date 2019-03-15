var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EntrySchema = new Schema({
    name:{
        type:String,
        required:true
    },
    points: {
        type:String,
        required:true
    },
    title:{
        type:String,
        required:false
    },
    genre:{
        type:String,
        required:false
    },
    user:{
        type:String,
        required:false
    },
    date:{
        type:Date,
        default:Date.now
    }

});

mongoose.model('Entries', EntrySchema);