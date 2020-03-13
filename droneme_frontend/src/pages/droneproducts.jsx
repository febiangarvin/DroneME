import React, { useEffect, useState } from 'react';
import Header from '../components/header'
import Footer from '../components/footer';
import Axios from 'axios'
import { apiurl, apiImage } from '../support/apiurl'
import { useDispatch } from 'react-redux'
import { usersAddCart } from '../redux/actions'
import Swal from 'sweetalert2'

const DroneProducts = () => {

    const [dataDrone, setDataDrone] = useState([])

    // //set dipatch(pengganti connect, pada class component)
    const dispatch = useDispatch()

    useEffect(() => {
        Axios.get(`${apiurl}/products/getdroneproducts`)
            .then((res) => {
                setDataDrone(res.data.result)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const addProduct = (dataProduct) => {
        dispatch(usersAddCart(dataProduct))
        Swal.fire({
            title: 'Product Added!',
            text: `Check your cart to view the added item`,
            icon: 'success',
            background: '#21272C',
            color: '#ddd'
        })
    }

    const renderProduk = () => {
        return dataDrone.map((val, index) => {
            const detailProduct = {
                idproducts: val.idproducts,
                productprice: val.productprice,
            }
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
                            <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                We have, <h4>{val.productstock}</h4> items left in store
                            </p>
                        </center>
                        <br />
                        <center>
                            <h5 className="productPrice">Rp {val.productprice}</h5>
                            <br />
                            <div onClick={() => addProduct(detailProduct)} className="btn-medium mt-1 mb-1" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '10px', marginBottom: '5px' }}>
                                Add This Product
                            </div>
                        </center>
                        <br />
                    </div>
                </div>
            )
        })
    }

    // //============================== RENDER AKHIR ==========================================================// //

    return (
        <div>
            <Header />

            <h2 className="productHeader">Drone Products</h2>
            <div className='productList'>
                {renderProduk()}
            </div>

            <Footer />
        </div>
    );
}

export default DroneProducts;