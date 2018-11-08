import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Control extends Component {
    render() {
        return (
          <nav className="navbar navbar-inverse navbar-fixed-top" id="control">
          <div className="container-fluid">        
            <form className="navbar-form navbar-left" action="/action_page.php">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search everything" name="search" />
                <div className="input-group-btn">
                  <button className="btn btn-default" type="submit">
                    <i className="glyphicon glyphicon-search" />
                  </button>
                </div>
              </div>
            </form>
            <ul className="nav navbar-nav navbar-center">
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li><Link to="/allItems">All Items</Link></li>
              <li><a href="#">Page 2</a></li>
              <li><a href="#">Page 3</a></li>
              <ul>
              
              
              
        </ul>
            </ul>
            <form className="navbar-form navbar-right" action="/action_page.php">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Leave your number and we will contact" name="search" />
                <div className="input-group-btn">
                  <button className="btn btn-default" type="submit">
                    <i className="glyphicon glyphicon-earphone" />
                  </button>
                </div>
              </div>
              <button type="submit" className="btn btn-success"><i className="glyphicon glyphicon-shopping-cart" />
                <Link to="/cart">Cart</Link>
              </button>
            </form>            
          </div>
          </nav>
        
  
        );
    }
}

export default Control;
