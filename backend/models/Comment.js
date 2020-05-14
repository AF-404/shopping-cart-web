const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//
const CommentSchema = new Schema({
    message:{
        type:String
    }

},{
    collection: 'comments'
});

module.exports = mongoose.model('Comment', CommentSchema)
