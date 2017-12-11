/**
 * ParametersController
 *
 * @description :: Server-side logic for managing quizzes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  updateParameters: function (req, res) {

    sails.config.parameters.theme = req.params.all().theme;
    sails.config.parameters.difficulty = req.params.all().difficulty;
    sails.config.parameters.size = req.params.all().size;
    sails.config.parameters.activateSound = req.params.all().activateSound;
    sails.config.parameters.langage = req.params.all().langage;
      return res.redirect('/parameters');
  }

};
