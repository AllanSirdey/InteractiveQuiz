/**
 * MessageController
 *
 * @description :: Server-side logic for managing messages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getMessage: function(req, res) {
        Message.find({}, function(err, found){
                res.view( 'message/messages', {messages: found} );
        });
    }
};

