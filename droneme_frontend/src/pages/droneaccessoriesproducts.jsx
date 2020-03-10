import React, { useEffect, useState } from 'react';
import Header from '../components/header'
import Footer from '../components/footer';
import Axios from 'axios'
import { apiurl, apiImage } from '../support/apiurl'

const DroneAccessoriesProducts = () => {

    const [dataDroneAccessories, setDataDroneAccessories] = useState([])

    useEffect(() => {
        Axios.get(`${apiurl}/products/getdroneaccessoriesproducts`)
            .then((res) => {
                setDataDroneAccessories(res.data.result)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const renderProduk = () => {
        return dataDroneAccessories.map((val, index) => {
            return (
                <div className='productList' style={{ display: 'column' }}>
                    <div style={{ display: "flex" }}>
                        <div class="card">
                            <img
                                src={apiImage + val.productimage} alt='productImage'
                                style={{ width: "100%" }}
                            />
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
                                    <h5 className="productPrice">{val.productprice}</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div>
            <Header />

            <div className='row'>
                {renderProduk()}
            </div>

            <Footer />
        </div>
    );
}

export default DroneAccessoriesProducts;