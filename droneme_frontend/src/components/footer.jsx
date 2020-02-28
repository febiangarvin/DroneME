import React, { Component } from "react";
import bnpb from '../components/support/img/bnpb.png'
import aroi from '../components/support/img/aroi.png'
import drl from '../components/support/img/drl.png'
import lapan from '../components/support/img/lapan.png'

class Footer extends Component {
    state = {};
    render() {
        return (
            <div className='footer'>
                <div className="footer_top">
                    <p>Official products, parts, and mechanics supplier for:</p>
                    <div className="trust-logos row">
                        <div className="trust-logos column">
                            <div className="trust-logos column1">
                                <img src={bnpb} alt="bnpb" />
                            </div>
                            <div className="trust-logos column2">
                                <img src={lapan} alt="lapan" />
                            </div>
                            <div className="trust-logos column3">
                                <img src={drl} alt="drl" />
                            </div>
                            <div className="trust-logos column4">
                                <img src={aroi} alt="aroi" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12 col-md-12 col-xs-12 footer_main">

                    <div className="col-xs-5 col-md-3 footer-left">
                        <h4>Get to know us better</h4>
                        <ul className="footer-list">
                            <li><a href='/About'>About Us</a></li>
                            <li><a href='/Reviews'>Reviews</a></li>
                            <li><a href='/FAQ'>FAQ's</a></li>
                            <li><a href='/'>Policies</a></li>
                        </ul>
                    </div>

                    <div className="col-xs-7 col-md-3 col-md-push-6 footer-right">
                        <div className="footer-box">
                            <h4>Need a hand?</h4>
                            <p>We are here to help 24/7 </p>
                            <ul className="footer-list">
                                <li>Indonesia</li>
                                <li className="phone">+62 786 123 9090</li>
                                <li>International / Roaming</li>
                                <li className="phone">+62 755 123 9999</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xs-10 col-md-6 col-md-pull-3 footer-middle">
                        <h4>A big fan of drones?</h4>
                        <p>Register for our newsletter to get the latest tech, newest trends, exclusive offers, etc.</p>
                        <form className="hero-cta-form">
                            <div className="elcontainer">
                                <div className="inner-wrap submit-container">
                                    <div className="hero-cta-input-wrap">
                                        <input type="email" name="data[email]" required id="hero-cta-email" style={{ width: 300 }} placeholder="Your Email Address" />
                                    </div>
                                    <button type="submit" className="btn-medium" style={{ marginLeft: -60 }}>Sign Up</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>

                <div className="footer_bottom">
                    <div className="col-lg-3 col-md-12 footer-copyright">
                        <p>©2020 All rights reserved.</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Footer;