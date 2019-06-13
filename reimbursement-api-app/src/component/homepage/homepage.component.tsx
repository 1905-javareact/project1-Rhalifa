import React from 'react'
import { Component } from 'react'
//import { getAllUserComponent } from '../user/user.component';
import { NavComponent } from '../nav/nav.component';



export class HomePageComponent extends Component {

    render() {

        return (
            <div>
                <NavComponent/>
                <label>Welcome</label>
                
            </div>

        );
    }
}