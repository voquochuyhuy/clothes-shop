import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Cart from './Cart';
import AllItems from './AllItems';
import Home from './Home';
class DirectURL extends Component {
   
    render() {
        return (
            
                
                    <div>                       
                        <Route exact path="/" 
                        render = {(props) => <Home {...props} linkimg1={this.props.linkimg1} />}/>
                        <Route path="/cart" 
                        render = {(props) => <Cart {...props} linkimg={this.props.linkimg} />}/>
                        <Route path="/allItems" component={AllItems} />
                        
                    </div>
                
            
        );
    }
}

export default DirectURL;