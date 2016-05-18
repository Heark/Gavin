var Gavin = require('cylon');

Gavin.robot({
  work: function() {
    every((20).second(), function() {
      console.log("Gavin online");
    });
  }
}).start();
