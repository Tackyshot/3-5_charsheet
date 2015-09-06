var path = require('path'),
    hapi = require('hapi'),
    fs = require('fs'),
    exports = {};

//set Exports
exports.Server = function(next) {

    //create server.
    var Server = new hapi.Server();

    //register configuration
    Server.register({
        register: require("./config.js"),
        options: {
            decorate: true
        }
    }, function(err){
        if(err){
            console.log("config error: ", err);
            return next(err);
        }
    });

    //define SSL server connection
    if(Server.config.server.ssl.hasSSL) {

        Server.connection({
            port: Server.config.server.ssl.port,
            tls: {
                key: fs.readFileSync(path.join(__dirname, 'ssl', Server.config.server.ssl.key)),
                cert: fs.readFileSync(path.join(__dirname, 'ssl', Server.config.server.ssl.cert))
            }
        });

    }
    else{

        //define server connections.
        Server.connection({
            port: Server.config.server.port
        });

    }

    //instantiate all methods into the application
    fs.readdirSync(__dirname + '/methods').forEach(function(filename){
        if(~filename.indexOf('.js')){
            Server.register(require(__dirname + "/methods/" + filename), function(err){
                if(err){
                    console.error("Error Instantiating", filename);
                    return next(err);
                }
            });
        }
    });

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
    });*/

    Server.register(require('./routes/router.js'), function (err) {
        if(err) {
            console.error("routes error: ", err);
            return next(err);
        }
    });

    //start the server
    exports.start = function(next){

        Server.start(function(err){

            if(err) return next(err, Server);
            return next(null, Server);

        });
    };

    //stop the server
    exports.stop = function(next){

        Server.stop({}, function(){

            next(null, Server);

        });

    };

    return next(null);

};



module.exports = exports;