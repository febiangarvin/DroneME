import React, { Component } from 'react'
import Header from '../components/header'
import Footer from '../components/footer';

class NotFound extends Component { // //component jika pada url web tidak sesuai namanya dengan component yang telah dibuat
    render() {
        return (
            <div>
                <Header />
                <div id="error-page">
                    <div id="error-inner">
                        <h1> Sorry, you've got the wrong direction</h1>
                        <div className="pesan-eror">404</div>
                        <p className="balik-home"><a href="/">RETURN TO HOME</a></p><br />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default NotFound