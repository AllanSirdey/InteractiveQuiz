/**
 * QuizController
 *
 * @description :: Server-side logic for managing quizzes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    getQuiz: function (req, res) {


        console.log(req.session.user.auth.email);
        req.setLocale('es');
        Quiz.find({}, function (err, found) {
            res.view('quiz/quiz', {
                quiz: found
            });
        });
    },

    detailsQuiz: function (req, res) {
        Quiz.findOne({
            id: req.params.id
        }).populate('questions').exec(function (e, r) {
            res.view('quiz/details', {
                quiz: r
            });
        });
    },

	create: function(req, res) {
        Quiz.create(req.params.all(), function(err, todo){
            if (err) return res.serverError();
            return res.redirect('/quiz/');
        });
    },

    delete: function (req, res) {
        Quiz.destroy({
            id: req.params.id
        }, function (err, todo) {
            if (err) return res.serverError();
            return res.redirect('/quiz');
        });
    },

    play: function (req, res) {
      Quiz.findOne({
          id: req.params.id
      }).populate('questions').exec(function (e, r) {
          res.view('quiz/play', {
              quiz: r
          });
      });
    }
};
