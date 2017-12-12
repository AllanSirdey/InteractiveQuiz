// api/services/Kinect.js
module.exports = {

  startKinect: function () {
    var Kinect2 = require('kinect2');
    var kinect = new Kinect2();
      
    if(kinect.open()) {

        kinect.on('bodyFrame', function(bodyFrame){
        sails.sockets.blast('bodyFrame', bodyFrame);
        });

        kinect.openBodyReader();
    }

  }


};
