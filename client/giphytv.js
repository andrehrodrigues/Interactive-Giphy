/**
 * Created by Andre on 26/07/2016.
 */
import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './giphytv.html';
import  { Pedidos } from '../imports/api/pedidos/pedidos';

let template;


Template.giphytv.onCreated(function helloOnCreated() {
    template = Template.instance();

    template.primeiroPedido =  () =>{
        return Pedidos.findOne();
    }


});

Template.giphytv.helpers({
    'pedido':()=>{
        return template.primeiroPedido().pedido;
    },
});