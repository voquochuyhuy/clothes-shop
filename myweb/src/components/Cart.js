import React, { Component } from 'react';


class Cart extends Component {
    getImage = () => {
        const temp = this.props.linkimg;
        if(temp === null)
        return (<div><h1>there is no items</h1></div>)
        else{
        const temp2= temp.map((x)=>(<img className="incart" src={x} alt=""></img>));
        return temp2;
        }
    }
    render() {
        return (
            <div className="container-fuild" id="incart" >
                {this.getImage()}
                
                <button type="button" className="btn  btn-success">Pay</button>
                
            </div>
        );
    }
}

export default Cart;