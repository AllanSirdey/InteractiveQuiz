/**
 * QuestionsController
 *
 * @description :: Server-side logic for managing questions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	new: function(req, res) {
        res.view( 'question/new/', {id: req.params.id_quiz} );
    },
    
	create: function(req, res) {
        Questions.create(req.params.all(), function(err, todo){
            if (err) return res.serverError();
            return res.redirect('/quiz');
        });
    },

    delete: function (req, res) {
        Questions.destroy({
            id: req.params.id
        }, function (err, todo) {
            if (err) return res.serverError();
            return res.redirect('/quiz');
        });
    }
};

