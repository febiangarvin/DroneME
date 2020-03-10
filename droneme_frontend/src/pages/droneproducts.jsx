import React, { Component } from 'react';
import Header from '../components/header'
import Footer from '../components/footer';
import { apiurl, apiImage } from '../support/apiurl'
import Axios from 'axios';

class DroneProducts extends Component {
    state = {
        dataDrone: []
    }

    renderDrone = () => {
        var dataDrone = this.state.dataDrone
        return dataDrone.map((val, index) => {
            return (
                <div class="card" key={index} style={{ position: 'relative' }}>
                    <div style={{ height: '200px', width: '100%' }}>
                        <img
                            src={`${apiImage + val.productimage}`}
                            alt='productImage'
                            style={{ alignItems: 'center', height: '100%', width: '100%' }}
                        />
                    </div>
                    <br />
                    <div class="container">
                        <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                            {val.productname}
                        </h4>
                        <center>
                            <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                {val.productdescription}
                            </p>
                        </center>
                        <br />
                        <center>
                            <h5 className="productPrice">Rp {val.productprice}</h5>
                            <br />
                            <a href='/Product' className="btn-small mt-1 mb-1" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px', marginBottom: '5px' }}>
                                Add This Product
                                    </a>
                        </center>
                        <br />
                    </div>
                </div>
            )
        })
    }

    componentDidMount() {
        Axios.get(`${apiurl}/products/getdroneproducts`)
            .then((res) => {
                this.setState({ dataDrone: res.data.result })
                console.log(res.data.result);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <Header />
                <div className='productList'>
                    {this.renderDrone()}
                </div>
                <Footer />
            </div>
        );
    }
}

export default DroneProducts;