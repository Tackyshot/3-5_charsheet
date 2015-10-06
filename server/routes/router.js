"use strict";
const fs = require('fs');

let register = function(Server, options, next){

    fs.readdirSync(__dirname + '/route_definitions').forEach(function(filename){
        if(~filename.indexOf('.js')){
            let Route = require(__dirname + '/route_definitions/' + filename);
            let route = new Route;

            Server.register(route.getHandler(), function(){});

            Server.route(route.getOptions())

        }
    });

    /*Server.route({
        method: ['POST'],
        path: "/",
        handler: {index:{}},
        config:{
            auth:{
                strategy: "hapi-auth-cookie",
                mode: "try"
            }
        }
    });*/


    /*Server.route({
        method: ['POST'],
        path: "/login",
        handler: {login:{}},
        config:{
            auth:{
                strategy: "hapi-auth-cookie",
                mode: "try"
            }
        }
    });

    Server.router({
        method: ['POST'],
        path: "/login",
        handler: {logout:{}},
        config:{
            auth:{
                strategy: "hapi-auth-cookie",
                mode: "try"
            }
        }
    });*/

    //make other routes dynamic
    //campaigns
    //characters
    //character_info


};

register.attributes = {
    name: "router",
    version: "1.0.0"
};

module.exports = register;