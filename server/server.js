"use strict";
const   path = require('path'),
        hapi = require('hapi'),
        fs = require('fs');

class Server {
    constructor(){
        this.server = new hapi.Server();
        let server = this.server;

        server.register(
            {
                register: require("./config.js"),
                options: {
                    decorate: true
                }
            },
            (err) => {
                if(err) return console.log("config error: ", err);
            }
        );


        //define the connection options
        if(server.config.hasSSL){
            server.connection(
                {
                    port: server.config.server.ssl.port,
                    tls: {
                        key: fs.readFileSync(path.join(__dirname, 'ssl', server.config.server.ssl.key)),
                        cert: fs.readFileSync(path.join(__dirname, 'ssl', server.config.server.ssl.cert))
                    }
                }
            );
        }
        else{
            server.connection(
                {
                    port: server.config.server.port

                }
            );
        }//connection

        server.register(require('./routes/router.js'), (err) => {
            if(err) return console.error("routes error: ", err);
        });

        //TODO: add authentication layer.

        this.start = this.start.bind(this);

    }//constructor

    start(){
        return this.server.start((err) => {
            if (err) return console.log("Start Error:", err);
            console.log("Server Started at:", this.server.info.uri);
            return this.server;
        });
    }

    stop(callback){
        this.server.stop(callback)
    }

};

//register JSON web tokens
/*Server.register(require('hapi-auth-cookie'), function(err){
    if(err){
        console.error("There was an error integrating JSON web tokens into the auth system");
        return next(err);
    }

    //set the jwt validation strategy
    Server.auth.strategy('session', 'cookie', true,{
        password: "charsheet2015",
        cookie: "charsheet",
        redirectTo: "/login",
        isSecure: false
    });


    //register the routes. all routes require authentication
    Server.register(require('./routes/router.js'), function (err) {
        if(err) {
            console.error("routes error: ", err);
            return next(err);
        }
    });
});
*/

module.exports = new Server;