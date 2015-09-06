import fs from 'fs';

let register = function(Server, options, next){

    fs.readdirSync(__dirname + '/handlers').forEach(function(filename){
        if(~filename.indexOf('.js')){
            Server.register(require(__dirname + '/handlers/' + filename), function(){});
        }
    });

    Server.route({
        method: ['POST'],
        path: "/",
        handler: {index:{}},
        config:{
            /*auth:{
                strategy: "hapi-auth-cookie",
                mode: "try"
            }*/
        }
    });


    Server.route({
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
    });

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