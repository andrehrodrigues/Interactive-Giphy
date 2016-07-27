import { Meteor } from 'meteor/meteor';
import './methods';
import '../imports/startup/server';
import 'meteor/reactive-var';

import  { Pedidos } from '../imports/api/pedidos/pedidos';

Meteor.startup(() => {
  // code to run on server at startup

    var countdown = new ReactiveCountdown(30);

    countdown.start(function(){

        let ped = Pedidos.findOne();

        Meteor.call('pedidos.remove', ped, (error) => {
            if (error) {
                alert(error.reason);
            } else {

            }
        });

        countdown.start();

    });



});
