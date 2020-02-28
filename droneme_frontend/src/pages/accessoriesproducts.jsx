import React, { Component } from 'react';
import Header from '../components/header'
import Footer from '../components/footer';

class AccessoriesProducts extends Component {
    state = {}
    render() {
        return (
            <div>
                <Header />
                {/* =============================== RENDER PRODUCT TOP LIST =============================== */}

                <div className='productTopList' style={{ display: 'column' }}>
                    <h2 className="productHeader">Accessories</h2>

                    <div style={{ display: "flex" }}>
                        <div class="card cardNewProduct">
                            <img
                                src="https://www1.djicdn.com/cms/uploads/bf761fcb67c37a91bf2ffd541d3a19ff.png" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    DJI Googles
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif", color: 'green' }}>
                                        New Product!
                                    </p>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        Natively compatible with flagship DJI products, DJI Goggles feature two 1920×1080 displays and an OcuSync wireless transmission system that provide amazing FPV flight experiences.
                                    </p>
                                </center>
                                <br />
                                <center>
                                    <h5 className="productPrice">Rp5.000.000</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>

                        <div class="card cardLimitedStock">
                            <img
                                src="https://sc02.alicdn.com/kf/Hedab8f9a5a834c2c880fcb637b3819c2Y/DJI-Robomaster-S1-FPV-Camera-Car-Radio.png" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    DJI Robo Master S1
                                </h4>
                                <center >
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif", color: 'red' }}>
                                        Limited Stock!
                                    </p>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        The RoboMaster S1 is a educational robot built to unlock the potential in every learner.
                                    </p>
                                </center>
                                <br />
                                <center>
                                    <h5 className="productPrice">Rp10.000.000</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>

                        <div class="card cardMostWanted">
                            <img
                                src="https://www.drohnen.de/wp-content/uploads/2019/08/DJI-Osmo-Mobile-3-Test.png" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    DJI Osmo Mobile 3
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif", color: 'blue' }}>
                                        Most Wanted Item!
                                    </p>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        Osmo Mobile 3 delivers a super-smooth, stabilized image. A lightweight, ultra-responsive design reacts to your movements in real time, letting you focus more on the moment at hand.
                                    </p>
                                </center>
                                <br />
                                <center>
                                    <h5 className="productPrice">Rp3.000.000</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>

                        <div class="card cardMostWanted">
                            <img
                                src="https://cdn.shopify.com/s/files/1/0660/5563/products/DJI-Controller-Monitor-Smart-Mavic2-occusync_grande.png?v=1546959240" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    DJI Smart Controller
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif", color: 'blue' }}>
                                        Most Wanted Item!
                                    </p>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        The DJI Smart Controller is designed to maximize your outdoor flying experience with the Mavic 2 or other aircraft equipped with OcuSync 2.0.
                                    </p>
                                </center>
                                <br />
                                <center>
                                    <h5 className="productPrice">Rp2.500.000</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>

                    </div>
                </div>

                {/* =============================== RENDER LIST PRODUCT 1 ================================= */}

                <div className='productList' style={{ display: 'column' }}>
                    <div style={{ display: "flex" }}>
                        <div class="card">
                            <img
                                src="https://cdn10.bigcommerce.com/s-xxhdb6xi/product_images/uploaded_images/p4.png" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    Phantom 4 pro
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        An uprated camera is equipped with a 1-inch 20-megapixel sensor capable of shooting 4K/60 fps video and Burst Mode stills at 14 fps.
                                    </p>
                                </center>
                                <br />
                                <center>
                                    <h5 className="productPrice">Rp25.000.000</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>

                        <div class="card">
                            <img
                                src="https://cdn10.bigcommerce.com/s-xxhdb6xi/product_images/uploaded_images/p4.png" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    Phantom 4 pro
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        An uprated camera is equipped with a 1-inch 20-megapixel sensor capable of shooting 4K/60 fps video and Burst Mode stills at 14 fps.
                                    </p>
                                </center>
                                <br />
                                <center>
                                    <h5 className="productPrice">Rp25.000.000</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>

                        <div class="card">
                            <img
                                src="https://cdn10.bigcommerce.com/s-xxhdb6xi/product_images/uploaded_images/p4.png" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    Phantom 4 pro
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        An uprated camera is equipped with a 1-inch 20-megapixel sensor capable of shooting 4K/60 fps video and Burst Mode stills at 14 fps.
                                    </p>
                                </center>
                                <br />
                                <center>
                                    <h5 className="productPrice">Rp25.000.000</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>

                        <div class="card">
                            <img
                                src="https://cdn10.bigcommerce.com/s-xxhdb6xi/product_images/uploaded_images/p4.png" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    Phantom 4 pro
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        An uprated camera is equipped with a 1-inch 20-megapixel sensor capable of shooting 4K/60 fps video and Burst Mode stills at 14 fps.
                                    </p>
                                </center>
                                <br />
                                <center>
                                    <h5 className="productPrice">Rp25.000.000</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =============================== RENDER LIST PRODUCT 2 ================================= */}

                <div className='productList' style={{ display: 'column' }}>
                    <div style={{ display: "flex" }}>
                        <div class="card">
                            <img
                                src="https://cdn10.bigcommerce.com/s-xxhdb6xi/product_images/uploaded_images/p4.png" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    Phantom 4 pro
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        An uprated camera is equipped with a 1-inch 20-megapixel sensor capable of shooting 4K/60 fps video and Burst Mode stills at 14 fps.
                                    </p>
                                </center>
                                <br />
                                <center>
                                    <h5 className="productPrice">Rp25.000.000</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>

                        <div class="card">
                            <img
                                src="https://cdn10.bigcommerce.com/s-xxhdb6xi/product_images/uploaded_images/p4.png" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    Phantom 4 pro
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        An uprated camera is equipped with a 1-inch 20-megapixel sensor capable of shooting 4K/60 fps video and Burst Mode stills at 14 fps.
                                    </p>
                                </center>
                                <br />
                                <center>
                                    <h5 className="productPrice">Rp25.000.000</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>

                        <div class="card">
                            <img
                                src="https://cdn10.bigcommerce.com/s-xxhdb6xi/product_images/uploaded_images/p4.png" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    Phantom 4 pro
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        An uprated camera is equipped with a 1-inch 20-megapixel sensor capable of shooting 4K/60 fps video and Burst Mode stills at 14 fps.
                                    </p>
                                </center>
                                <br />
                                <center>
                                    <h5 className="productPrice">Rp25.000.000</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>

                        <div class="card">
                            <img
                                src="https://cdn10.bigcommerce.com/s-xxhdb6xi/product_images/uploaded_images/p4.png" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    Phantom 4 pro
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        An uprated camera is equipped with a 1-inch 20-megapixel sensor capable of shooting 4K/60 fps video and Burst Mode stills at 14 fps.
                                    </p>
                                </center>
                                <br />
                                <center>
                                    <h5 className="productPrice">Rp25.000.000</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =============================== RENDER LIST PRODUCT 3 ================================= */}

                <div className='productList' style={{ display: 'column' }}>
                    <div style={{ display: "flex" }}>
                        <div class="card">
                            <img
                                src="https://cdn10.bigcommerce.com/s-xxhdb6xi/product_images/uploaded_images/p4.png" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    Phantom 4 pro
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        An uprated camera is equipped with a 1-inch 20-megapixel sensor capable of shooting 4K/60 fps video and Burst Mode stills at 14 fps.
                                    </p>
                                </center>
                                <br />
                                <center>
                                    <h5 className="productPrice">Rp25.000.000</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>

                        <div class="card">
                            <img
                                src="https://cdn10.bigcommerce.com/s-xxhdb6xi/product_images/uploaded_images/p4.png" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    Phantom 4 pro
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        An uprated camera is equipped with a 1-inch 20-megapixel sensor capable of shooting 4K/60 fps video and Burst Mode stills at 14 fps.
                                    </p>
                                </center>
                                <br />
                                <center>
                                    <h5 className="productPrice">Rp25.000.000</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>

                        <div class="card">
                            <img
                                src="https://cdn10.bigcommerce.com/s-xxhdb6xi/product_images/uploaded_images/p4.png" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    Phantom 4 pro
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        An uprated camera is equipped with a 1-inch 20-megapixel sensor capable of shooting 4K/60 fps video and Burst Mode stills at 14 fps.
                                    </p>
                                </center>
                                <br />
                                <center>
                                    <h5 className="productPrice">Rp25.000.000</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>

                        <div class="card">
                            <img
                                src="https://cdn10.bigcommerce.com/s-xxhdb6xi/product_images/uploaded_images/p4.png" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    Phantom 4 pro
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        An uprated camera is equipped with a 1-inch 20-megapixel sensor capable of shooting 4K/60 fps video and Burst Mode stills at 14 fps.
                                    </p>
                                </center>
                                <br />
                                <center>
                                    <h5 className="productPrice">Rp25.000.000</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =============================== RENDER LIST PRODUCT 4 ================================= */}

                <div className='productList' style={{ display: 'column' }}>
                    <div style={{ display: "flex" }}>
                        <div class="card">
                            <img
                                src="https://cdn10.bigcommerce.com/s-xxhdb6xi/product_images/uploaded_images/p4.png" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    Phantom 4 pro
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        An uprated camera is equipped with a 1-inch 20-megapixel sensor capable of shooting 4K/60 fps video and Burst Mode stills at 14 fps.
                                    </p>
                                </center>
                                <br />
                                <center>
                                    <h5 className="productPrice">Rp25.000.000</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>

                        <div class="card">
                            <img
                                src="https://cdn10.bigcommerce.com/s-xxhdb6xi/product_images/uploaded_images/p4.png" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    Phantom 4 pro
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        An uprated camera is equipped with a 1-inch 20-megapixel sensor capable of shooting 4K/60 fps video and Burst Mode stills at 14 fps.
                                    </p>
                                </center>
                                <br />
                                <center>
                                    <h5 className="productPrice">Rp25.000.000</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>

                        <div class="card">
                            <img
                                src="https://cdn10.bigcommerce.com/s-xxhdb6xi/product_images/uploaded_images/p4.png" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    Phantom 4 pro
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        An uprated camera is equipped with a 1-inch 20-megapixel sensor capable of shooting 4K/60 fps video and Burst Mode stills at 14 fps.
                                    </p>
                                </center>
                                <br />
                                <center>
                                    <h5 className="productPrice">Rp25.000.000</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>

                        <div class="card">
                            <img
                                src="https://cdn10.bigcommerce.com/s-xxhdb6xi/product_images/uploaded_images/p4.png" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    Phantom 4 pro
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        An uprated camera is equipped with a 1-inch 20-megapixel sensor capable of shooting 4K/60 fps video and Burst Mode stills at 14 fps.
                                    </p>
                                </center>
                                <br />
                                <center>
                                    <h5 className="productPrice">Rp25.000.000</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =============================== RENDER LIST PRODUCT 5 ================================= */}

                <div className='productList' style={{ display: 'column' }}>
                    <div style={{ display: "flex" }}>
                        <div class="card">
                            <img
                                src="https://cdn10.bigcommerce.com/s-xxhdb6xi/product_images/uploaded_images/p4.png" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    Phantom 4 pro
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        An uprated camera is equipped with a 1-inch 20-megapixel sensor capable of shooting 4K/60 fps video and Burst Mode stills at 14 fps.
                                    </p>
                                </center>
                                <br />
                                <center>
                                    <h5 className="productPrice">Rp25.000.000</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>

                        <div class="card">
                            <img
                                src="https://cdn10.bigcommerce.com/s-xxhdb6xi/product_images/uploaded_images/p4.png" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    Phantom 4 pro
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        An uprated camera is equipped with a 1-inch 20-megapixel sensor capable of shooting 4K/60 fps video and Burst Mode stills at 14 fps.
                                    </p>
                                </center>
                                <br />
                                <center>
                                    <h5 className="productPrice">Rp25.000.000</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>

                        <div class="card">
                            <img
                                src="https://cdn10.bigcommerce.com/s-xxhdb6xi/product_images/uploaded_images/p4.png" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    Phantom 4 pro
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        An uprated camera is equipped with a 1-inch 20-megapixel sensor capable of shooting 4K/60 fps video and Burst Mode stills at 14 fps.
                                    </p>
                                </center>
                                <br />
                                <center>
                                    <h5 className="productPrice">Rp25.000.000</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>

                        <div class="card">
                            <img
                                src="https://cdn10.bigcommerce.com/s-xxhdb6xi/product_images/uploaded_images/p4.png" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    Phantom 4 pro
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        An uprated camera is equipped with a 1-inch 20-megapixel sensor capable of shooting 4K/60 fps video and Burst Mode stills at 14 fps.
                                    </p>
                                </center>
                                <br />
                                <center>
                                    <h5 className="productPrice">Rp25.000.000</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =============================== RENDER LIST PRODUCT 6 ================================= */}

                <div className='productList' style={{ display: 'column' }}>
                    <div style={{ display: "flex" }}>
                        <div class="card">
                            <img
                                src="https://cdn10.bigcommerce.com/s-xxhdb6xi/product_images/uploaded_images/p4.png" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    Phantom 4 pro
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        An uprated camera is equipped with a 1-inch 20-megapixel sensor capable of shooting 4K/60 fps video and Burst Mode stills at 14 fps.
                                    </p>
                                </center>
                                <br />
                                <center>
                                    <h5 className="productPrice">Rp25.000.000</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>

                        <div class="card">
                            <img
                                src="https://cdn10.bigcommerce.com/s-xxhdb6xi/product_images/uploaded_images/p4.png" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    Phantom 4 pro
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        An uprated camera is equipped with a 1-inch 20-megapixel sensor capable of shooting 4K/60 fps video and Burst Mode stills at 14 fps.
                                    </p>
                                </center>
                                <br />
                                <center>
                                    <h5 className="productPrice">Rp25.000.000</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>

                        <div class="card">
                            <img
                                src="https://cdn10.bigcommerce.com/s-xxhdb6xi/product_images/uploaded_images/p4.png" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    Phantom 4 pro
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        An uprated camera is equipped with a 1-inch 20-megapixel sensor capable of shooting 4K/60 fps video and Burst Mode stills at 14 fps.
                                    </p>
                                </center>
                                <br />
                                <center>
                                    <h5 className="productPrice">Rp25.000.000</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>

                        <div class="card">
                            <img
                                src="https://cdn10.bigcommerce.com/s-xxhdb6xi/product_images/uploaded_images/p4.png" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    Phantom 4 pro
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        An uprated camera is equipped with a 1-inch 20-megapixel sensor capable of shooting 4K/60 fps video and Burst Mode stills at 14 fps.
                                    </p>
                                </center>
                                <br />
                                <center>
                                    <h5 className="productPrice">Rp25.000.000</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =============================== RENDER LIST PRODUCT 7 ================================= */}

                <div className='productList' style={{ display: 'column' }}>
                    <div style={{ display: "flex" }}>
                        <div class="card">
                            <img
                                src="https://cdn10.bigcommerce.com/s-xxhdb6xi/product_images/uploaded_images/p4.png" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    Phantom 4 pro
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        An uprated camera is equipped with a 1-inch 20-megapixel sensor capable of shooting 4K/60 fps video and Burst Mode stills at 14 fps.
                                    </p>
                                </center>
                                <br />
                                <center>
                                    <h5 className="productPrice">Rp25.000.000</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>

                        <div class="card">
                            <img
                                src="https://cdn10.bigcommerce.com/s-xxhdb6xi/product_images/uploaded_images/p4.png" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    Phantom 4 pro
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        An uprated camera is equipped with a 1-inch 20-megapixel sensor capable of shooting 4K/60 fps video and Burst Mode stills at 14 fps.
                                    </p>
                                </center>
                                <br />
                                <center>
                                    <h5 className="productPrice">Rp25.000.000</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>

                        <div class="card">
                            <img
                                src="https://cdn10.bigcommerce.com/s-xxhdb6xi/product_images/uploaded_images/p4.png" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    Phantom 4 pro
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        An uprated camera is equipped with a 1-inch 20-megapixel sensor capable of shooting 4K/60 fps video and Burst Mode stills at 14 fps.
                                    </p>
                                </center>
                                <br />
                                <center>
                                    <h5 className="productPrice">Rp25.000.000</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>

                        <div class="card">
                            <img
                                src="https://cdn10.bigcommerce.com/s-xxhdb6xi/product_images/uploaded_images/p4.png" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    Phantom 4 pro
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        An uprated camera is equipped with a 1-inch 20-megapixel sensor capable of shooting 4K/60 fps video and Burst Mode stills at 14 fps.
                                    </p>
                                </center>
                                <br />
                                <center>
                                    <h5 className="productPrice">Rp25.000.000</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default AccessoriesProducts;