import React            from 'react';
import AppBar           from 'material-ui/lib/app-bar';
import LeftNav          from 'material-ui/lib/left-nav.js';
import RightIconNav     from './right-icon-nav.jsx';

export default class Navigation extends React.Component{
    constructor(props, state){
        super(props, state);

        this.state = {};
        this.menuItems = [
            { route: 'get-started', text: 'Get Started' },
            { route: 'customization', text: 'Customization' },
            { route: 'components', text: 'Components' }
        ];

        //bindings
        this.getMenuItems = this.getMenuItems.bind(this);
        this.expandLeftNav = this.expandLeftNav.bind(this);
    }

    getMenuItems(){
        return this.menuItems;
    }

    expandLeftNav(e){
        console.log(this.refs);
        this.refs.LeftNav.toggle();
    }

    render(){

        return(
            <div>
                <AppBar
                    title="Characterize"
                    onLeftIconButtonTouchTap={this.expandLeftNav}
                    iconElementRight={
                        <RightIconNav />
                    }
                />

                <LeftNav ref="LeftNav" docked={false} menuItems={this.getMenuItems()} />
            </div>

        )
    }
}