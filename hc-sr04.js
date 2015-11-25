"use strict";

var Cylon = require('cylon');

var distancia = 0;
var tiempo = 0;

Cylon.robot({
    connections: {
        arduino: { adaptor: 'firmata', port: '/dev/ttyACM0' }
    },

    devices: {
        sensor: { driver: 'ir-range-sensor', pin: 0, model: 'gp2y0a41sk0f' }
    },

    work: function(my) {
        every((1).seconds(), function(){
            var range = my.sensor.range();
            console.log('Range ===>', range);
        });
    }

}).start();

/*

var Cylon = require('cylon');

var distancia = 0;
var tiempo = 0;

Cylon.robot({
    connections: {
        arduino: {adaptor: 'firmata', port: '/dev/ttyACM0'}
    },

    devices: {
        asensor: { driver: 'analog-sensor', pin: 0 }
    },

    //El callback que ejecuta mi programa, recibe el propio robot.
    work: function(my) {
        //Cada X segundos ejecutamos el callback...
        every((1).second(), function() {
            //...leo el dato del pin y ejecuto un callback que recibe el dato.
            my.pin.digitalRead(function(data){
                console.log("Sensor emitiendo..."+data);
            });
        });
    }

});


Cylon.start();


*/
