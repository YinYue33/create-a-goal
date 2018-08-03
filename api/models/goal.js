var mongoose = require( 'mongoose' );   

var goalSchema = new mongoose.Schema({ 
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
    creator: {
        type: ObjectId,
        required: true
    }, 
    maxUser: Number,
    entryCredit: Number,
    participants: [ObjectId]
}); 

module.exports = mongoose.model('Goal', goalSchema);