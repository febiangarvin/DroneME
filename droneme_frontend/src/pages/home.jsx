import React, { Component } from 'react';
import Header from '../components/header'
import Jumbotron1 from '../components/jumbotron1'
import Jumbotron2 from '../components/jumbotron2';
import Jumbotron3 from '../components/jumbotron3';
import Jumbotron4 from '../components/jumbotron4';
import Footer from '../components/footer';

class Home extends Component {
    state = {}
    render() {
        return (
            <div>
                <Header />
                <Jumbotron1 />
                <Jumbotron2 />
                <Jumbotron3 />
                <Jumbotron4 />
                <Footer />
            </div>
        );
    }
}

export default Home;