import React, { Component } from 'react';


class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            check : false
        }
    }
    
    
   getItem = () => { 
    var temp = this.props.image;
    this.props.linkimg1(temp); 
    this.state.check = !this.state.check;       
    } 
    
    checkClick = ()=>{
        if (this.state.check === true)
        return(<button   type="button" className="btn btn-success btn-block added">In Cart </button> 
        )
    }
   
    
    render() {
        
        return (
            <div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <img className="listItem" src={this.props.image} alt="áđá" /> 
                    <button onClick = {this.getItem}  type="button" className="btn btn-primary addToCart">Add to Cart </button> 
                    {this.checkClick()}                                                                        
                </div>
            
            </div>

            
        );
    }
}

export default Items;