/**
 * Created by Andre on 18/07/2016.
 */
import { Meteor } from 'meteor/meteor';

Meteor.methods({
    getUserLocation: function() {

        try {
            var search_result = HTTP.call('GET', 'http://ip-api.com/json/' + this.connection.clientAddress);

            console.log("User ip: "+this.connection.clientAddress);
            console.log("Result SERVER:"+search_result.data);

            return this.connection.clientAddress;//search_result.data;
        } catch (_error) {
            throw new Meteor.Error("No Result", "Failed to fetch ...");
        }

    },

    searchGifsByPhrase: function(pedido) {
        this.unblock();

        let result = HTTP.call( 'GET', 'http://api.giphy.com/v1/gifs/search?q='+pedido.replace(' ','+')+'&api_key=dc6zaTOxFJmzC&limit=10');

        let urls = [];
        for(let i = 0; i < result.data.data.length;i++){
            urls.push(result.data.data[i].url);
        }

        return urls;

    },

    searchTrendingGifs: function() {
        this.unblock();

        let result = HTTP.call( 'GET', 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC');

        let urls = [];
        for(let i = 0; i < result.data.data.length;i++){
            urls.push(result.data.data[i].url);
        }

        return urls;

    }




});