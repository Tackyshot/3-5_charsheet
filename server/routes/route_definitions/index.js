"use strict";
module.exports  = class Index{
    constructor(){

        this.options = {
            method: ['GET'],
            path: "/",
            handler: {index:{}},
            config:{
                /*auth:{
                    strategy: "hapi-auth-cookie",
                    mode: "try"
                }*/
            }
        }

    }

    getOptions(){

        return this.options;
    }

    getHandler(){
        const register = function(Server, options, next){

            const handler = function(route, options){

                return function (req, res){

                    res("Hello, World!");

                }

            };

            Server.handler("index", handler);
            next();
        };

        register.attributes = {
            name: "handler-index",
            version: "1.0.0"
        };

        return register;

    }//getHandler
}