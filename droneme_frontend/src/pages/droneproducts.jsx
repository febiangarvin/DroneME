import React, { Component } from 'react';
import Header from '../components/header'
import Footer from '../components/footer';

class DroneProducts extends Component {
    state = {}
    render() {
        return (
            <div>
                <Header />
                {/* =============================== RENDER PRODUCT TOP LIST =============================== */}

                <div className='productTopList' style={{ display: 'column' }}>
                    <h2 className="productHeader">DJI Drones</h2>

                    <div style={{ display: "flex" }}>
                        <div class="card cardNewProduct">
                            <img
                                src="https://cdn10.bigcommerce.com/s-xxhdb6xi/product_images/uploaded_images/p4.png" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    Phantom 4 Pro
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif", color: 'green' }}>
                                        New Product!
                                    </p>
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

                        <div class="card cardLimitedStock">
                            <img
                                src="https://images-na.ssl-images-amazon.com/images/I/41ELU7zUyGL._AC_SY400_.jpg" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    Mavic Air Dystopia
                                </h4>
                                <center >
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif", color: 'red' }}>
                                        Limited Stock!
                                    </p>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        The Mavic Air is the most portable DJI drone to house a 3-axis mechanical gimbal.
                                    </p>
                                </center>
                                <br />
                                <center>
                                    <h5 className="productPrice">Rp7.500.000</h5>
                                    <br />
                                    <a href='/Product' className="btn-small" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px' }}>
                                        Add This Product
                                    </a>
                                </center>
                            </div>
                        </div>

                        <div class="card cardMostWanted">
                            <img
                                src="https://image.darty.com/telephonie/drone/drone/dji_mavic_mini_s1910294768744A_163646415.jpg" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    Mavic Mini
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif", color: 'blue' }}>
                                        Most Wanted Item!
                                    </p>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        The compact yet powerful Mavic Mini is the perfect creative companion, capturing your moments in a way that effortlessly elevates the ordinary.
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

                        <div class="card cardMostWanted">
                            <img
                                src="https://phantompilots.com/attachments/69729/" alt='productImage'
                                style={{ width: "100%" }}
                            />
                            <br />
                            <div class="container">
                                <h4 style={{ textAlign: "center", fontFamily: "Righteous, cursive" }}>
                                    Phantom 4 Advance Black Edition
                                </h4>
                                <center>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif", color: 'blue' }}>
                                        Most Wanted Item!
                                    </p>
                                    <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                        Entry-Level Professional Drone, that can shoot 4K/60fps videos and 20MP photos, the Phantom 4 Pro V2.0 grants filmmakers absolute creative freedom.
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

                <Footer />
            </div>
        );
    }
}

export default DroneProducts;