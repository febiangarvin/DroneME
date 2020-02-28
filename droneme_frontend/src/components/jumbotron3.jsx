import React, { Component } from 'react';
import carpenter from "../components/support/img/icons/carpenter.png";
import lifetime from "../components/support/img/icons/lifetime.png";
import tracking from "../components/support/img/icons/tracking.png";

class Jumbotron3 extends Component {
    state = {}
    render() {
        return (
            <div className="jumbotron3 darken-overlay2">
                <div className="heading">
                    <div className="heading2">
                        <h1>Why Us?</h1>
                        <div className="benefit">
                            <img src={carpenter} alt=''/>
                            <p>We are the first company in business to let you customize your own drone.
                                <br />With hundreds of parts to choose from, and assembled by the best mechanics.</p>
                        </div>
                        <div className="benefit">
                        <img src={lifetime} alt=''/>
                            <p>We guarantee that our products are reliable and tested before shipment.
                                    <br />But if something goes wrong, we provide you with our award-winning lifetime warranty.
                            </p>
                        </div>
                        <div className="benefit">
                        <img src={tracking} alt=''/>
                            <p>We offer free shipping to you throughout Indonesia.
                                <br />And throughout Southeast Asia, for commercial users.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Jumbotron3