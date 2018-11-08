import React, { Component } from 'react';

import './App.css';
import Control from './Control';
import Footer from './Footer';
import DirectURL from './DirectURL';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkimg : []
    }
  }
  getLinkImg = (LinkImg) => {this.setState({linkimg :[...this.state.linkimg,LinkImg + ""]})}
  
  render() {
    return (
      <Router>
        <div >
              <Control></Control> 
              <DirectURL linkimg1 = {this.getLinkImg} linkimg={this.state.linkimg}></DirectURL>
              <Footer></Footer>                               
        </div>
     </Router>
      
            
            
          );
        }
      };
    
  


export default App;
