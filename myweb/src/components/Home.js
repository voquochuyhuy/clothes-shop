import React, { Component } from 'react';
import Carousel from './Carousel';
import Items from './Items';
import Feedback from './Feedback';
class Home extends Component {
   
    render() {
        return (
            <div>                               
                <Carousel></Carousel>
                    <div className="container-fluid" id="list">
                        <div className="row">
                        <Items image="https://dyn4.tailorstore.com/NTMwfDUzMHx8ZmZmZmZm/images/catalog/12466%20-%20Herrskjorta%20-%20Islington,%20white.jpg" linkimg1 = {this.props.linkimg1}></Items>
                        <Items image="https://dyn2.tailorstore.com/NTMwfDUzMHx8ZmZmZmZm/images/catalog/4876-islington-white-men-s-shirt-folded-tailor-store.jpg" linkimg1 = {this.props.linkimg1}></Items>
                        <Items image="https://dyn4.tailorstore.com/NTMwfDUzMHx8ZmZmZmZm/images/catalog/12662-islington-light-blue-men-s-shirt-folded-tailor-store.jpg" linkimg1 = {this.props.linkimg1}></Items>
                        </div>                
                        <br></br>
                        <div className="row">
                        <Items image="https://dyn4.tailorstore.com/NTMwfDUzMHx8ZmZmZmZm/images/catalog/4272%20-%20Herrskjorta%20-%20Liberty%20Art,%20blue%20wild%20flowers%2012618.jpg" linkimg1 = {this.props.linkimg1}></Items>
                        <Items image="https://dyn2.tailorstore.com/NTMwfDUzMHx8ZmZmZmZm/images/catalog/4334%20-%20Herrskjorta%20-%20Wilson,%20blue%20and%20red%2012521.jpg" linkimg1 = {this.props.linkimg1}></Items>
                        <Items image="https://dyn3.tailorstore.com/NTMwfDUzMHx8ZmZmZmZm/images/catalog/3728%20-%20Herrskjorta%20-%20Godina,%20navy%2012505.jpg" linkimg1 = {this.props.linkimg1}></Items>
                        </div>                                            
                        </div> 
                        
                <Feedback></Feedback>
                
                
                
            </div>
        );
    }
}

export default Home;