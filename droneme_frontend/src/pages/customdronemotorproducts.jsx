import React, { useEffect, useState } from 'react';
import Header from '../components/header'
import Footer from '../components/footer';
import Axios from 'axios'
import { apiurl, apiImage } from '../support/apiurl'

const CustomDroneMotorProducts = () => {

    const [dataDroneMotor, setdataDroneMotor] = useState([])

    useEffect(() => {
        Axios.get(`${apiurl}/products/getdronemotorproducts`)
            .then((res) => {
                setdataDroneMotor(res.data.result)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const renderProduk = () => {
        return dataDroneMotor.map((val, index) => {
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
                                Choose This Motor
                            </a>
                        </center>
                        <br />
                    </div>
                </div>
            )
        })
    }

    return (
        <div>
            <Header />

            <h2 className="productHeader">Drone Motors</h2>
            <div className='productList'>
                {renderProduk()}
            </div>
            <br />
            <div style={{ textAlign: 'center', paddingBottom: '15px', marginBottom: '35px' }}>
                <a href='/customdronebatteryproducts' className="btn-medium mt-1 mb-1" style={{ textAlign: 'center', paddingRight: '15px', paddingBottom: '15px', marginBottom: '25px' }}>
                    Next Item
                </a>
            </div>
            <br />
            <Footer />
        </div>
    );
}

export default CustomDroneMotorProducts;