/**
 * Created by andrehr on 24/05/2016.
 */
import { Meteor } from 'meteor/meteor';
import { Pedidos } from './pedidos';

Meteor.methods({
    'pedidos.insert' (pedido) {
        Pedidos.insert(pedido, (error) => {
            if (error){
                console.log(error);
            }
        });
    },
    'pedidos.remove' (pedido) {
        Pedidos.remove(pedido, (error) => {
            if (error){
                console.log(error);
            }
        });
    },
    'pedidos.update' (pedidoId,pedido) {
        Pedidos.update({_id:pedidoId},{$set:pedido}, (error) => {
            if (error){
                console.log(error);
            }
        });
    }
});

