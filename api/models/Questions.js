/**
 * Questions.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        question: {
            type: 'string',
            required: true
        },
        correct_answer: {
            type: 'string',
            required: true
        },
        answer1: {
            type: 'string',
            required: true
        },
        answer2: {
            type: 'string',
            required: true
        },
        answer3: {
            type: 'string',
            required: true
        },
        id_quiz: {
            model: 'quiz'
        }
    }
};