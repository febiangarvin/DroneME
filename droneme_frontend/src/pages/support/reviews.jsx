import React, { Component } from 'react';
import Header from '../../components/header'
import Footer from '../../components/footer';
import Alli from '../../components/support/img/alli.png'
import Kane from '../../components/support/img/kane.png'
import Hugo from '../../components/support/img/hugo.png'
import Son from '../../components/support/img/son.png'

class Reviews extends Component {
    state = {}
    render() {
        return (
            <div>
                <Header />
                <div className="reviews">
                    <h2>Here what our customers have to say</h2>
                    <br /><br />
                    <div class="reviews-item">
                        <div class="reviews-picture">
                            <img src={Alli} alt="" />
                        </div>
                    </div>
                    <div className="reviews-item">
                        <div class="reviews-info">
                            <p class="title">
                                Dele
                            </p>
                            <p class="sub-title">
                                Head of Import of AROI
                            </p>
                        </div>
                    </div>
                    <p>
                        DroneME has become our official supply provider since 2019. It has been a privilage to work with<br />
                        them. Thruought our cooperation, they have provided us with knowledege, and help with our projects.<br />
                    </p>
                    <br /><br />
                    <div class="reviews-item">
                        <div class="reviews-picture">
                            <img src={Kane} alt="" />
                        </div>
                    </div>
                    <div className="reviews-item">
                        <div class="reviews-info">
                            <p class="title">
                                Kane
                            </p>
                            <p class="sub-title">
                                Head of Technology at BNPB Indonesia
                            </p>
                        </div>
                    </div>
                    <p>
                        In BNPB we are urged to make fast decisions, and quick response. And DroneME has exactly help us with<br />
                        that. We have hundreds of orders from DroneME and none of those has dissapoint us. They are reliable,<br />
                        helpful, informative, and truly our best partner in tech division.<br />
                    </p>
                    <br /><br />
                    <div class="reviews-item">
                        <div class="reviews-picture">
                            <img src={Hugo} alt="" />
                        </div>
                    </div>
                    <div className="reviews-item">
                        <div class="reviews-info">
                            <p class="title">
                                Hugo
                            </p>
                            <p class="sub-title">
                                CTO at LAPAN Indonesia
                            </p>
                        </div>
                    </div>
                    <p>
                        LAPAN is an organization that has help this country develop by the help of satellite imagery. As years<br />
                        have past, technology are now more advanced, and compatible. So that is why someof our projects are done<br />
                        with the use of drones. And that is where DroneME has helped us in our movements to drone mapping. They<br />
                        have gave us a lot of insights, help, and supplies throught our quest for drome mapping.
                    </p>
                    <br /><br />
                    <div class="reviews-item">
                        <div class="reviews-picture">
                            <img src={Son} alt="" />
                        </div>
                    </div>
                    <div className="reviews-item">
                        <div class="reviews-info">
                            <p class="title">
                                Heung
                            </p>
                            <p class="sub-title">
                                Manager of Drone Racing League Event in Singapore
                            </p>
                        </div>
                    </div>
                    <p>
                        When DRL was formed, we knew that were going to be a lot of drones involved, it is clear that this event<br />
                        are about drones. As the competition began to rise, our participant grew for hundreds to thousands. And<br />
                        we knew that it will be difficult for us to supply the participant with parts, drones, etc. Luckily DroneME<br />
                        has been our reliable partner since 2019. They helped us in various ways possible, they made this event successfull<br />
                        and I certainly believe they will make this event more successfull in the coming years.
                    </p>
                    <br /><br />
                    <br /><br /><br />
                </div>
                <Footer />
            </div >
        );
    }
}

export default Reviews;