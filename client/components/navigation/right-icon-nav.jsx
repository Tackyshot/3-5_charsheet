import React            from 'react';
import {Link}           from 'react-router';
import RaisedButton     from 'material-ui/lib/raised-button';

export default class RightIconNav extends React.Component{
    constructor(props, state){
        super(props, state);

        this.state = {};

    }

    render(){
        //<Link to="/account" >
        //</Link>

        return(
            <div>
                {/*link here*/}
                <RaisedButton label="Edit Account" primary={true}/>
                {/*end link here*/}

                <a href="/logout">
                    <RaisedButton label="Logout" primary={true} style={{marginLeft: "1em"}}/>
                </a>
            </div>

        )
    }
}