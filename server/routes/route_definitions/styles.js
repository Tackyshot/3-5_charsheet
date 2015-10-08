"use strict";
module.exports  = new class Scripts{
    constructor(){

        this.options = {
            method: ['GET'],
            path: "/css/{stylesheet}",
            handler: {styles:{}},
            config:{
                /*auth:{
                 strategy: "hapi-auth-cookie",
                 mode: "try"
                 }*/
            }
        }

    }

    getHandler(){
        const fs = require('fs');

        var register = function(Server, options, next){

            var handler = function(route, options){

                return function (req, res){

                    let file = fs.readFileSync(__dirname + '/../../assets/client/css/' + req.params.stylesheet);

                    //console.log(file.toString());


                    res(file).type("text/css");

                }

            };

            Server.handler("styles", handler);
            next();
        };

        register.attributes = {
            name: "handler-styles",
            version: "1.0.0"
        };

        return register;

    } //handler

    getOptions(){

        return this.options;
    }
}