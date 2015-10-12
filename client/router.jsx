//import dependencies.
import  React                       from 'react';
import  {Router, Route, IndexRoute} from 'react-router';
import  Request                     from 'superagent';

//import Components
import  App                         from './components/app.jsx';
import  Index                       from './components/index/index.jsx';
import  Character                   from './components/character/character.jsx';

//define routes here
//<Route path="campaign/:campaignId" component={Campaign} />
//<Route path="character/:characterId" component={Character} />
//<Route path="account" component={Account} />

export default class ReactRouter{
    constructor(){

    }

    run(){
        const Routes = this.routes;

        console.log("run bitch!");
        React.render((
            <Router>
                <Route path="/" component={App} >
                    <IndexRoute component={Character} />
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

