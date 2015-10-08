"use strict";
import React        from 'react';
import {Router}     from 'react-router';

//components
import Div          from '../helpers/div.jsx';


export default class Index extends React.Component{
    constructor(props, state){
        super(props, state);
    }

    render(){
        return(
            <div>
                <p>Hello, World! This has worked!</p>
            </div>
        )
    }
}