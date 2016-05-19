var RR1 = require('cylon');
require('hotdog')

RR1.robot({
  connections: {
    keyboard: { adaptor: 'keyboard' },
    raspi: { adaptor: 'raspi' },
    arduino: { adaptor: 'firmata', port: '/dev/ttyACM0' },
    joystick: { adaptor: 'joystick' }
  },

  devices: {
    keyboard: { driver: 'keyboard' },
    led: { driver: 'led', pin: 11 },
    motor: { driver: 'motor', pin: 3 },// connect to motor
    controller: { driver: 'xbox-360' }
  },

  work: function(my) {
    /**!
    // flash LED if motor is on
    function flashMotor() {
      if(my.motor.isOn == true) {
        my.led.toggle();
      } else {
        if(my.led.isOn == true) {
          my.led.toggle();
        } else {
          console.log("Motor is off");
        }
      }
    }
    my.keyboard.on('v', function(key){
      my.motor.toggle(); // Toggle motor on or off
    });
    
    var $MOTORSPEED = 10;
    my.keyboard.on('w', function(key) {
      $MOTORSPEED++;
      console.log("Motor speed set at "+$MOTORSPEED);
    });
    my.keyboard.on('s', function(key) {
      $MOTORSPEED--;
      console.log("Motor speed set at "+$MOTORSPEED);
    });
    my.motor.speed($MOTORSPEED);
    
    my.keyboard.on('a', function(key) {
      my.motor.stop();
    });
    every((1).second(), flashMotor()); // Flash LED when motor is on
    ["a", "b", "x", "y"].forEach(function(button) {
      my.controller.on(button + ":press", function() {
        console.log("Button " + button + " pressed.");
      });

      my.controller.on(button + ":release", function() {
        console.log("Button " + button + " released.");
      });
    });

    my.controller.on("left_x:move", function(pos) {
      console.log("Left Stick - X:", pos);
    });

    my.controller.on("left_y:move", function(pos) {
      console.log("Left Stick - Y:", pos);
    });

    my.controller.on("right_x:move", function(pos) {
      console.log("Right Stick - X:", pos);
    });

    my.controller.on("right_y:move", function(pos) {
      console.log("Right Stick - Y:", pos);
    });

    my.controller.on("lt:move", function(pos) {
      console.log("Left Trigger: ", pos);
    });

    my.controller.on("rt:move", function(pos) {
      console.log("Right Trigger: ", pos);
    })
    */
  }
  
}).start();
