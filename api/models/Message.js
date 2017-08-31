/**
 * Message.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      source:{
          type:'string'
      },
      prenomnom:{
          type:'string'
      },
      imgUser:{
          type:'string'
      },
      imgUserBackground:{
          type:'string'
      },
      texteFront:{
          type:'string'
      },
      img:{
          type:'string'
      },
      numero:{
          type:'string'
      },
      show:{
          type:'boolean'
      },
      survey_id:{
          type:'integer'
      }
  }
};
