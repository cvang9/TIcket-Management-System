const Model = require('../models/messageModel.js')
let ticketId;

class MessageController {

    static getAllMessages = async ( req,res )=> {

        try {

            if( !req.session.isUser && !req.session.isResolver )
            {
                res.redirect('/');
                return;
            }

            ticketId = req.params.ticketId;

            const messages = await Model.MessageModel.find({ticketId: ticketId });
            res.status(200).json(messages);
            
        } catch (error) {
            console.log(error)   
        }

    }

    static setImageMessage = async ( req, res ) => {

        try {

            if( !req.session.isUser && !req.session.isResolver )
            {
                res.redirect('/');
                return;
            }

            const ticketId = req.params.ticketId;
            console.log( 'image ID: ' + ticketId );

            const doc = {
                ticketId: ticketId,
                filename: req.file.originalname,
                role: req.body.role,
            }

            const result = await Model.MessageModel.create(doc);
            res.status(200).json(result);
            
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = {
    MessageController
}