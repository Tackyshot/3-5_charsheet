//import dependencies.
import  React           from 'react';
import  Router          from 'react-router';
import  Request         from 'superagent';

//import Components
import  App             from './components/app.jsx';
import  Index           from './components/index.jsx';

const   Route           = Router.Route,
        DefaultRoute    = Router.DefaultRoute,
        NotFouneRoute   = Router.NotFoundRoute;


//define routes here
let routes = (
    <Route handler={App} path="/">
        <DefaultRoute name="index" handler={Index} />
    </Route>
);


module.exports = {
    run: function(){
        Router.run(routes, function(Handler, state){

            React.render(<Handler params={state.params} />, document.getElementbyId("App"));

        });

    }
}

