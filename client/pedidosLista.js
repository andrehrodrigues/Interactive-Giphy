/**
 * Created by Andre on 26/07/2016.
 */
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './pedidosLista.html';
import './pedido';
import  { Pedidos } from '../imports/api/pedidos/pedidos';

let template;

Template.pedidosLista.onCreated(function () {
    template = Template.instance();

    Meteor.subscribe('Pedidos');

    template.pedido =  () =>{
        return Pedidos.find();
    }

});

Template.pedidosLista.helpers({
    'pedidos':()=>{
        return template.pedido();
    },
});

Template.pedidosLista.events({

});