var mongoose = require( 'mongoose' ); 
var ObjectId =  mongoose.Schema.ObjectId;
 

var commentSchema = new mongoose.Schema({ 
    comment: {
        type: String, 
        required: true
    }, 
    task: {
        type: ObjectId,
        required: true
    },
    createdTime: {
        type: Date,
        required: true
    },  
    creator: {
        type: ObjectId,
        required: true
    } 
}); 

module.exports = mongoose.model('comment', commentSchema);