import React, { Component } from 'react';

class AllItems extends Component {
    render() {
        return (           
            <div id="mySidenav" className="sidenav">
                <a className="closebtn" onclick="closeNav()">×</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>
            
        );
    }
}

export default AllItems;