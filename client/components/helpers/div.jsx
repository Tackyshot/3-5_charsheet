"use strict";
import React        from 'react';
import _            from 'lodash';
import ColWidth     from '../../scripts/colwidth';

const colwidth = new ColWidth;

export default class Div extends React.Component{
    constructor(props, state){
        super(props, state);

        this.state = {
            colWidth: colwidth.getWidth(this.props.colWidth) || 12,
            id: this.props.id || "",
            class: this.props.class || "",
            style: this.props.style || {}
        };
    }

    componentWillReceiveProps(nextProps){
        /*
        * Props:
        *   colWidth: type: number, specifies column width of component. default: 12
        *   id: type: string, defines the id attribute, default ""
        *   class: type: string, defines a className. default ""
        *   style: type: object, specifies custom styles. default {}
        *   children: type: Component, defines the components to be rendered inside this one. default null
        *
        */

        console.log("recieving");

        this.setState({
            colWidth: colwidth.getWidth(nextProps.colWidth) || 12,
            id: nextProps.id || "",
            class: nextProps.class || "",
            style: nextProps.style || {}
        });

    }

    shouldComponentUpdate(nextProps){

        console.log("should it?");

        if(this.props !== nextProps){
            return true;
        }
        else{
            return false;
        }

    }

    render(){

        var style = _.merge(this.state.style, {width: this.state.colWidth, float: "left"});

        console.log("style", this.state.style);

        return(
            <div style={style} >
                {this.props.children}
            </div>
        );

    }//render

}