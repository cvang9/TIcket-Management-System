const Controller = require('../controllers/messageContoller.js');
const express = require('express');
const router = express.Router();


router.get('/all/:ticketId', Controller.MessageController.getAllMessages );
router.post('/image/:ticketId', Controller.MessageController.setImageMessage );


module.exports = {
    router
}
