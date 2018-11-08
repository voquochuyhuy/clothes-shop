import React, { Component } from 'react';

class Feedback extends Component {
    render() {
        return (
            <div>
                <div id="celeb-user-comment" className="container-fluid">         
                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">                 
                        <img className="Celebrities" src="../img/Celebrities.jpg" alt="ddeso co" /> 
                        </div> 
                        <div id="user-comment" className="col-xs-6 col-sm-6 col-md-6 col-lg-6"> 
                        <div>
                            <h3>REVIEW OF CUSTOMER</h3>
                        </div>                
                        <div className="media">
                            <div className="media-left">
                            <img className="avatar" src="../img/avatar1.jpg" />
                            </div>
                            <div className="media-body">
                            <h4 className="media-heading">John Doe</h4>
                            <p>Lorem ipsum...</p>
                            </div>
                        </div> 
                        <div className="media">
                            <div className="media-left">
                            <img className="avatar" src="../img/avatar2.jpg" />
                            </div>
                            <div className="media-body">
                            <h4 className="media-heading">John Doe</h4>
                            <p>Lorem ipsum...</p>
                            </div>
                        </div> 
                        <div className="media">
                            <div className="media-left">
                            <img className="avatar" src="../img/avatar3.jpg" />
                            </div>
                            <div className="media-body">
                            <h4 className="media-heading">John Doe</h4>
                            <p>Lorem ipsum...</p>
                            </div>
                        </div>  
                        <form action method="POST" role="form">
                            <legend>Leave your comment here</legend>
                            <div className="form-group">                           
                            <input type="text" className="form-control" id placeholder="Input field" />
                            </div>
                            <button type="submit" className="btn btn-primary">Send</button>
                        </form>
                        </div>             
                </div>                                   
            </div>
</div>
            
        );
    }
}

export default Feedback;