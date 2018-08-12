var mongoose = require( 'mongoose' ); 
var ObjectId =  mongoose.Schema.ObjectId;
 

var taskSchema = new mongoose.Schema({ 
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String 
    },
    startDate: {
        type: Date,
        required: true
    }, 
    endDate: {
        type: Date,
        required: true
    },
    goal: {
        type: ObjectId,
        required: true
    },
    creator: {
        type: ObjectId,
        required: true
    } 
}); 

module.exports = mongoose.model('task', taskSchema);