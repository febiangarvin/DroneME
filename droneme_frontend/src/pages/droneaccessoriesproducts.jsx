import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Header from '../components/header'
import Footer from '../components/footer';
import Axios from 'axios'
import { apiurl, apiImage } from '../support/apiurl'
import { useDispatch } from 'react-redux'
import { usersAddCart } from '../redux/actions'
import Swal from 'sweetalert2'

const DroneAccessoriesProducts = () => {

    // //============================== FUNCTION READ =========================================================// //

    const [dataDroneAccessories, setDataDroneAccessories] = useState([])

    // //set dipatch(pengganti connect, pada class component)
    const dispatch = useDispatch()

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
                            <br />
                            <button className='btn btn-success mr-1 ml-1' onClick={() => onModalOpen(index)}>Product Details</button>
                            <br /><br />
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

    // //============================== FUNCTION ADD PRODUCT ==================================================// //

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

    // //============================== FUNCTION OPEN MODAL PRODUCT DESCRIPTION ===============================// //

    const [productDescription, setProductDescription] = useState({
        idproducts: 0,
        productname: '',
        productdescription: '',
    })

    const { idproducts, productname, productdescription } = productDescription

    const [descriptionModal, setDescriptionModal] = useState({
        modalDescription: false,
        indexDescription: -1
    })

    const { indexDescription, modalDescription } = descriptionModal

    const onModalOpen = (index) => {
        setProductDescription(dataDroneAccessories[index])
        setDescriptionModal({ ...descriptionModal, modalDescription: true, indexDescription: index });
    }

    const toggleModal = () => setDescriptionModal({ ...descriptionModal, modalDescription: !modalDescription })

    const renderModalDescription = () => {
        return dataDroneAccessories.map((val, index) => {
            // const detailProduct = {
            //     idproducts: val.idproducts,
            //     productprice: val.productprice,
            // }
            return (
                <Modal isOpen={modalDescription} fade={false} key={index} toggle={toggleModal}>
                    <ModalHeader>
                        <center>
                            {productname} Details:
                        </center>
                    </ModalHeader>
                    <ModalBody>
                        <center>
                            {productdescription}
                        </center>
                    </ModalBody>
                    <ModalFooter>
                        {/* <div onClick={() => addProduct(detailProduct)} className="btn-small mt-1 mb-1" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '10px', marginBottom: '5px' }}>
                            <i className="fas fa-cart-plus" />
                        </div> */}
                        <Button color="secondary" onClick={toggleModal}>Close</Button>
                    </ModalFooter>
                </Modal>
            )
        })
    }

    // //============================== RENDER AKHIR ==========================================================// //

    return (
        <div>
            <Header />
            {renderModalDescription()}
            <h2 className="productHeader">Drone Parts</h2>
            <div className='productList'>
                {renderProduk()}
            </div>

            <Footer />
        </div>
    );
}

export default DroneAccessoriesProducts;