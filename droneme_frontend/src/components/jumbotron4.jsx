import React, { Component } from 'react';
import { GiFalconMoon } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { GiAutoRepair } from "react-icons/gi";

class Jumbotron4 extends Component {
    state = {}
    render() {
        return (
            <div className="jumbotron4 darken-overlay">
                <div className="heading">
                    <div className="heading4">
                        <h1>We Help You Fly!</h1>
                        <p>First time using a drone? No worries we've got you covered!<br /> Click the link below to see our documentations.</p>
                        <br />
                        <a className="btn-big" href='/flyadrone'>
                            Flying a Drone &nbsp;<GiFalconMoon />
                        </a>
                        <a className="btn-big" href='/buildadrone'>
                            Assembling a Drone &nbsp;<FaTools />
                        </a>
                        <a className="btn-big" href='/repairadrone'>
                            Repairing a Drone &nbsp;<GiAutoRepair />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Jumbotron4