import { Meteor } from 'meteor/meteor';
import './methods';
import '../imports/startup/server';
import 'meteor/reactive-var';

import  { Pedidos } from '../imports/api/pedidos/pedidos';

Meteor.startup(() => {
  // code to run on server at startup

    if(Pedidos.find().count() === 0) {
        insertTrendingGifs();
    }

    var countdownWord = new ReactiveCountdown(85);

    countdownWord.start(function(){

        let ped = Pedidos.findOne();

        Meteor.call('pedidos.remove', ped, (error) => {
            if (error) {
                alert(error.reason);
            } else {

            }
        });

        if(Pedidos.find().count() === 0){
            insertTrendingGifs();
        }

        countdownWord.start();
    });



    var countdownGif = new ReactiveCountdown(10);

    countdownGif.start(function(){

        let ped = Pedidos.findOne();
        console.log(ped.gifs.length);
        let gif = ped.gifs[0];

        Meteor.call('pedidos.removeGif', ped._id, gif , (error) => {
            if (error) {
                alert(error.reason);
            } else {

            }
        });

        countdownGif.start();
    });



});

function insertTrendingGifs(){

    Meteor.call('searchTrendingGifs', (error, result)=>{
        const pedido = {
            pedido: "Trending",
            gifs: result
        }

        Meteor.call('pedidos.insert', pedido, (error) => {
            if (error) {
                alert(error.reason);
            } else {

            }
        });

    });

}