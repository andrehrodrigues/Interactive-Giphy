/**
 * Created by andrehr on 24/05/2016.
 */
import {Pedidos} from "../pedidos";
import "../methods";

Meteor.publish('Pedidos', () => {
    return Pedidos.find();
});