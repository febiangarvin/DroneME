import React, { Component } from 'react';
import { FaPaperPlane } from "react-icons/fa";

class Jumbotron1 extends Component {
    state = {}
    render() {
        return (
            <div className="jumbotron1 darken-overlay">
                <div className="heading">
                    <div className="heading1">
                        <h1>Realize Your Own Creativity!</h1>
                        <p>Build and customize your own drone, <br /> with the support of a variety of drone parts and assembled by the best mechanics.</p>
                        <br />
                        <a className="btn-big" href='/customdronebodyproducts'>
                            BUILD NOW &nbsp;<FaPaperPlane />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Jumbotron1