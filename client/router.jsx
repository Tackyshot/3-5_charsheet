//import dependencies.
import  React                       from 'react';
import  {Router, Route, IndexRoute} from 'react-router';
import  Request                     from 'superagent';

//import Components
import  App                         from './components/app.jsx';
import  Index                       from './components/index/index.jsx';

//define routes here
//<Route path="campaign/:campaignId" component={Campaign} />
//<Route path="character/:characterId" component={Character} />
//<Route path="account" component={Account} />

export default class ReactRouter{
    constructor(){

        this.routes = (
            <Router>
                <Route component={App} >
                    <Route path="/" component={Index} />
                </Route>
            </Router>
        );

    }

    run(){
        const Routes = this.routes;

        console.log("run bitch!");
        React.render((
            <Router>
                <Route path="/" component={App} >
                    <IndexRoute component={Index} />
                </Route>
            </Router>
        ), document.getElementById("App"));
    }

};


/*module.exports = {
    run: function(){
        console.log("run bitch!");
        React.render(Routes, document.getElementById("App"));
    }
}*/

