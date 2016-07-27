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

    getUserLocation: function() {

        try {
            var search_result = HTTP.call('GET', 'http://ip-api.com/json/' + this.connection.clientAddress);

            console.log("User ip: "+this.connection.clientAddress);
            console.log("Result SERVER:"+search_result.data);

            return this.connection.clientAddress;//search_result.data;
        } catch (_error) {
            throw new Meteor.Error("No Result", "Failed to fetch ...");
        }

    }




});