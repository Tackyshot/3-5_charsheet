import Server from './server/server.js';

Server.server(function(err){
    if(err) console.log("Server Initialization Error:", err);

    Server.start(function(err, server){
        if(err) console.log("Server Start Error", err);

        console.log("Server started at:", server.info.uri);
    })
});