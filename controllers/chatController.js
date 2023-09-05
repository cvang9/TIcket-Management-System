class ChatController {

    static chatDashboard = (req,res) => {
        if( !req.session.isUser && !req.session.isResolver )
        {
            res.redirect('/');
            return;
        }

        const ticketId = req.params.ticketId;
        res.render('chat', {ticketId: ticketId});
    }
}

module.exports = {
    ChatController
}