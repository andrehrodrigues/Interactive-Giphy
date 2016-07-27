/**
 * Created by Andre on 26/07/2016.
 */
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './addPedido.html';
import  { Pedidos } from '../imports/api/pedidos/pedidos';

let template;

Template.addPedido.onCreated(function () {

});

Template.addPedido.helpers({

});

Template.addPedido.events({
    'submit form' (event, template){
        event.preventDefault();

        // console.log(
        //   Meteor.call("getUserLocation", function (error, result) {
        //     console.log('result CLIENT erro : ', error);
        //       console.log('result CLIENT result: ', result);
        //       return result;
        //     }
        //    )
        // );

        // console.log(
        //   Meteor.call('getUserLocation'), function(error, result) {
        //     if (error) {
        //         console.log(error);
        //     }
        //     else {
        //         headers.list = result;
        //     }
        // }
        //
        // );

        const pedido = {
            pedido: template.find('[name="pedido"]').value.trim(),
        };

        if (pedido.pedido!== '') {
            Meteor.call('pedidos.insert', pedido, (error) => {
                if (error) {
                    alert(error.reason);
                } else {
                    template.find('form').reset();
                }
            });
        } else {
            alert('Escolha uma palavra a ser buscada!.');
        }
    }
});