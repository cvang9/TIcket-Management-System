const express = require('express');
const Controller = require('../controllers/chatController.js')

const router = express.Router();

router.use('/:ticketId', Controller.ChatController.chatDashboard );

module.exports = {
    router
}