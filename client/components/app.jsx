"use strict";
import React            from 'react';
import {Router, Link}   from 'react-router';
import Navigation       from './navigation/navigation.jsx';

//components
import Div          from './helpers/div.jsx';


export default class App extends React.Component{
    constructor(props, state){
        super(props, state);
        let injectTapEventPlugin = require("react-tap-event-plugin");

        //Needed for onTouchTap
        //Can go away when react 1.0 release
        //Check this repo:
        //https://github.com/zilverline/react-tap-event-plugin
        injectTapEventPlugin();

    }

    render(){
        return(
            <div className="row">
                <Navigation />

                {this.props.children}
            </div>
        )
    }
}