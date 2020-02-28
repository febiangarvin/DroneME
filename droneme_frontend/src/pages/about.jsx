import React, { Component } from 'react';
import Header from '../components/header'
import Footer from '../components/footer';
import Luka from '../components/support/img/luka.png'
import Gareth from '../components/support/img/bale.png'
import Rafael from '../components/support/img/rafael.png'

class About extends Component {
    state = {}
    render() {
        return (
            <div>
                <Header />
                <div className="about darken-overlay4">
                    <h2>GET TO KNOW US BETTER</h2>
                    <br /><br />
                    <h4>The Inspiration Behind the Website</h4>
                    <p>
                        This website was founded by 3 students from Purwadhika School; Rafael, Gareth, and Luka. They made this<br />
                        website for their final project. The inspiration behind the website was founded when the three of them<br />
                        was working together at Senopati, Jakarta when they saw kids trying to build a spaceship with a lego.<br />
                        From there, they decided that they wanted to create a webiste that sells parts for drones and could be<br />
                        assembeled by them or buy the customer.<br /><br />
                    </p>
                    <div class="about-item">
                        <div class="about-picture">
                            <img src={Luka} alt="" />
                        </div>
                        <div class="about-picture">
                            <img src={Gareth} alt="" />
                        </div>
                        <div class="about-picture">
                            <img src={Rafael} alt="" />
                        </div>
                    </div>
                    <div className="about-item">
                        <div class="about-info">
                            <p class="title">
                                Luka
                            </p>
                            <p class="sub-title">
                                Back-End Developer
                            </p>
                        </div>
                        <div class="about-info">
                            <p class="title">
                                Gareth
                            </p>
                            <p class="sub-title">
                                Front-End Developer
                            </p>
                        </div>
                        <div class="about-info">
                            <p class="title">
                                Rafael
                            </p>
                            <p class="sub-title">
                                Database Manager
                            </p>
                        </div>
                    </div>
                    <h4>The Goal</h4>
                    <p>
                        We wanted to ensure that our customers experience the best buy from an online site. A website that they could<br />
                        trust and be satisfied. We were the first company that enables our customers to design their own drone, with<br />
                        hundreds of parts to choose from, and helpful automized drone doctor that helps you build the best version<br />
                        of your desired drone. Whether it's a photography drone, a racing drone, a carrier, etc.<br /><br />
                    </p>
                    <h4>Our Next Ambition</h4>
                    <p>
                        As we are always growing everyday, we wanted to take a further step towards this company, by making our sales<br />
                        global and that our services could reach overseas. We wanted to make a global standard as a influential startup<br />
                        company that helps engineers, developers, creative minds do their best at aerial photography, carrier, etc.<br />
                    </p>
                    <br /><br /><br />
                </div>
                <Footer />
            </div>
        );
    }
}

export default About;