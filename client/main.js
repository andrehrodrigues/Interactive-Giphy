import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './main.html';
import  { Pedidos } from '../imports/api/pedidos/pedidos';

let template;

Template.pedidosLista.onCreated(function helloOnCreated() {
  template = Template.instance();

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
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

//--------------------- template add pedido---------------------

Template.addPedido.onCreated(function helloOnCreated() {

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
