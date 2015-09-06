const register = function(Server, options, next){

    const handler = function(route, options){

        return function (req, res){

        }

    };

    Server.handler("index", handler);
    next();
};

register.attributes = {
    name: "handler-index",
    version: "1.0.0"
};

module.exports = register;