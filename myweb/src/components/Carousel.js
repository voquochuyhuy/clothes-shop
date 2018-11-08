import React, { Component } from 'react';

class Carousel extends Component {
    render() {
        return (
            <div>
                <div id="carousel-id" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-id" data-slide-to={0} className />
                        <li data-target="#carousel-id" data-slide-to={1} className />
                        <li data-target="#carousel-id" data-slide-to={2} className="active" />
                    </ol>
                <div className="carousel-inner">
                    <div className="item">
                    <img className="item-in-carousel" src="https://dyn3.tailorstore.com/MjAwMHx8OTB8ZmZmZmZm/images/cms/Major-app.jpg" alt />
                    <div className="container">
                        <div className="carousel-caption">
                        {/* <h1>Example headline.</h1>
                        <p>Note: If you're viewing this page via a <code>file://</code> URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p> */}
                        <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
                        </div>
                    </div>
                </div>
                <div className="item">
                <img className="item-in-carousel" data-src="holder.js/900x500/auto/#666:#6a6a6a/text:Second slide" alt="Second slide" src="https://dyn3.tailorstore.com/MTEwMHx8OTB8ZmZmZmZm/images/cms/Header-svarta-skjortor-2.jpg" />
                <div className="container">
                    <div className="carousel-caption">
                    {/* <h1>Another example headline.</h1>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p> */}
                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                    </div>
                </div>
                </div>
                <div className="item active">
                <img className="item-in-carousel" data-src="holder.js/900x500/auto/#555:#5a5a5a/text:Third slide" alt="Third slide" src="https://dyn2.tailorstore.com/NTMwfDUzMHx8ZmZmZmZm/images/catalog/mens-shirt-venezia-black-detail-12311%20B.jpg" />
                <div className="container">
                    <div className="carousel-caption">
                    {/* <h1>One more for good measure.</h1>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p> */}
                    <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
                    </div>
                </div>
                </div>
                </div>
                <a className="left carousel-control" href="#carousel-id" data-slide="prev"><span className="glyphicon glyphicon-chevron-left" /></a>
                <a className="right carousel-control" href="#carousel-id" data-slide="next"><span className="glyphicon glyphicon-chevron-right" /></a>
                </div>
            </div>
        );
    }
}

export default Carousel;