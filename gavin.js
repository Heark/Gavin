var Gavin = require('cylon');


Gavin.robot({
  connections: {
    keyboard: { adaptor: 'keyboard' }
    raspi: { adaptor: 'raspi' }
  },

  devices: {
    keyboard: { driver: 'keyboard' }
    led: { driver: 'led', pin: 11 }
  },

  work: function(my) {
    my.keyboard.on('a', function(key) {
      console.log("A PRESSED!");
    });
    every((1).second(), my.led.toggle) // Flash LED when Raspberry Pi is on
    
  }
}).start();
