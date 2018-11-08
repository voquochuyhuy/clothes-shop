import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div id="footer" className="container-fluid">         
                    <div className="row">
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">                 
                        <div>
                            <h1>Store</h1>
                            <p>About us</p>
                            <p>Jobs</p>
                            <p>Gift Certificate</p>
                        </div>  
                        <br></br>
                        <div>
                            <h1>Customer Care</h1>
                            <p>Terms & Conditions</p>
                            <p>Shipping information</p>
                            <p>Privacy policy</p>
                        </div>                  
                        </div> 
                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <div>
                            <h1>Company Details</h1>
                            <p>Org no. 556697-7061</p>
                            <p>VAT no. SE556697706101</p>
                            <p>Gift Certificate</p>
                        </div>
                        <div>
                            <h1>Store</h1>
                            <p>About us</p>
                            <p>Jobs</p>
                            <p>Gift Certificate</p>
                        </div>
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"> 
                        <img className="img-circle" src="../img/paypal.png" alt />
                        <img className="img-circle" src="../img/visa.png" alt />
                        <img className="img-circle" src="../img/mastercard.png" alt />
                        <img className="img-circle" src="../img/facebook.png" alt/>
                        </div>             
                    </div>            
</div>

            </div>
        );
    }
}

export default Footer;