/**
 * Created by andrehr on 24/05/2016.
 */
import {Mongo} from 'meteor/mongo';

export const Pedidos = new Mongo.Collection('pedidos');

Pedidos.schema = new SimpleSchema({

    pedido: {
        type: String
    },
    gifs:{
        type: [String]
    }

});
Pedidos.attachSchema(Pedidos.schema);


