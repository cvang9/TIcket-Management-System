const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    role: {type: String, trim: true },
    ticketId: { type: String, required: true },
    message: { type: String },
    filename: { type: String }
});

const MessageModel = mongoose.model( 'messagelog', messageSchema );

module.exports = {
    MessageModel 
}


