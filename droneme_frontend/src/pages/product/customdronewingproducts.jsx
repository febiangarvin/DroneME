import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Header from '../../components/header'
import Footer from '../../components/footer';
import Axios from 'axios'
import { apiurl, apiImage } from '../../support/apiurl'

const CustomDroneWingProducts = () => {

    // //============================== FUNCTION READ =========================================================// //

    const [dataDroneWing, setdataDroneWing] = useState([])

    useEffect(() => {
        Axios.get(`${apiurl}/products/getdronewingproducts`)
            .then((res) => {
                setdataDroneWing(res.data.result)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const renderProduk = () => {
        return dataDroneWing.map((val, index) => {
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
                            <a href='/Product' className="btn-small mt-1 mb-1" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '5px', marginBottom: '5px' }}>
                                Choose This Wing
                            </a>
                        </center>
                        <br />
                    </div>
                </div>
            )
        })
    }

    // //============================== FUNCTION ADD CUSTOM PRODUCT ==================================================// //

    // const addProduct = (dataProduct) => {
    //     dispatch(usersAddCart(dataProduct))
    //     Swal.fire({
    //         title: 'Product Added!',
    //         text: `Check your cart to view the added item`,
    //         icon: 'success',
    //         background: '#21272C',
    //         color: '#ddd'
    //     })
    // }

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
        setProductDescription(dataDroneWing[index])
        setDescriptionModal({ ...descriptionModal, modalDescription: true, indexDescription: index });
    }

    const toggleModal = () => setDescriptionModal({ ...descriptionModal, modalDescription: !modalDescription })

    const renderModalDescription = () => {
        return dataDroneWing.map((val, index) => {
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
            <h2 className="productHeader">Drone Wings</h2>
            <div className='productList'>
                {renderProduk()}
            </div>
            <br />
            <div style={{ textAlign: 'center', paddingBottom: '15px', marginBottom: '35px' }}>
                <a href='/customdronemotorproducts' className="btn-medium mt-1 mb-1" style={{ textAlign: 'center', paddingRight: '15px', paddingBottom: '15px', marginBottom: '25px' }}>
                    Next Item
                </a>
            </div>
            <br />
            <Footer />
        </div>
    );
}

export default CustomDroneWingProducts;