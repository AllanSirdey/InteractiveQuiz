/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

    /***************************************************************************
     *                                                                          *
     * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
     * etc. depending on your default view engine) your home page.              *
     *                                                                          *
     * (Alternatively, remove this and add an `index.html` file in your         *
     * `assets` directory)                                                      *
     *                                                                          *
     ***************************************************************************/

    '/': {
        view: 'homepage'
    },

    'get /login': {
        view: 'user/login'
    },

    'get /signup': {
        view: 'user/signup'
    },

    /* MESSAGE */

    'get /message': {
        controller: 'MessageController',
        action: 'getMessage'
    },

    '/message/new': {
        view: 'message/new'
    },

    /* QUIZ */

    'get /quiz': {
        controller: 'QuizController',
        action: 'getQuiz'
    },

    'get /quiz/new': {
        view: 'quiz/new/'
    },

    'get /quiz/:id': {
        controller: 'QuizController',
        action: 'detailsQuiz'
    },

    'post /quiz': {
        controller:'QuizController',
        action:'create'
    },

    'get /quiz/delete/:id': {
        controller: 'QuizController',
        action: 'delete'
    },

    'get /quiz/play/:id': {
        controller: 'QuizController',
        action: 'play'
    },

    /* QUESTION */

    'get /question/new/:id_quiz': {
        controller: 'QuestionsController',
        action: 'new'
    },

    'get /questions/delete/:id': {
        controller: 'QuestionsController',
        action: 'delete'
    },

    'post /questions': {
        controller: 'QuestionsController',
        action: 'create'
    },

    /* PARAMETERS */

    'get /parameters': {
        view: 'parameters/parameters'
    },

    'post /updateParameters': {
        controller: 'ParametersController',
        action: 'updateParameters'
    },

    /* ARKANOID */

    'get /arkanoid': {
        view: 'arkanoid/index'
    },



    /***************************************************************************
     *                                                                          *
     * Custom routes here...                                                    *
     *                                                                          *
     * If a request to a URL doesn't match any of the custom routes above, it   *
     * is matched against Sails route blueprints. See `config/blueprints.js`    *
     * for configuration options and examples.                                  *
     *                                                                          *
     ***************************************************************************/

};
