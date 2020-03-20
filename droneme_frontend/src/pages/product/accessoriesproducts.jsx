import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Header from '../../components/header'
import Footer from '../../components/footer';
import Axios from 'axios'
import { apiurl, apiImage } from '../../support/apiurl'
import { useDispatch } from 'react-redux'
import { UserGetCart } from '../../redux/actions'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

const AccessoriesProducts = () => {

    // //============================== FUNCTION READ =========================================================// //

    const [dataAccessories, setDataAccessories] = useState([])

    const [pager, setPager] = useState({})

    const [page, setPage] = useState(1)

    const [productQuantity, setProductQuantity] = useState(1)

    // //set dipatch(pengganti connect, pada class component)
    const dispatch = useDispatch()

    useEffect(() => {
        Axios.get(`${apiurl}/products/getaccessoriesproducts/${page}`)
            .then((res) => {
                setDataAccessories(res.data.pageOfData)
                setPager(res.data.pager)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        Axios.get(`${apiurl}/products/getaccessoriesproducts/${page}`)
            .then((res) => {
                setDataAccessories(res.data.pageOfData)
                setPager(res.data.pager)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [page])

    const renderProduk = () => {
        return dataAccessories.map((val, index) => {
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
                            <p>Chosen Quantity :</p>
                            <input type="number" onChange={e => setProductQuantity(e.target.value)} className="form-control" style={{ width: '55px', marginLeft: '10px' }} name='quantity' defaultValue={1} min={1} />
                            <br />
                            <div onClick={() => addProduct(index)} className="btn-medium mt-1 mb-1" style={{ textAlign: 'center', paddingRight: '10px', paddingBottom: '10px', marginBottom: '5px' }}>
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

    const addProduct = (index) => {
        // dispatch(usersAddCart(detailProduct))
        const idusers = localStorage.getItem('droneme')
        dispatch({ type: 'ADD_CART_LOADING' })
        const newDataProduct = { idproducts: dataAccessories[index].idproducts, idusers: idusers, quantity: parseInt(productQuantity) }
        // console.log(newDataProduct);
        Axios.post(`${apiurl}/users/addcart`, newDataProduct) // //di object agar, req.body.idproducts di backend
            .then(res => {
                if (res.data.result) {
                    dispatch({ type: 'ADD_CART_SUCCESS' })
                    dispatch(UserGetCart())
                    Swal.fire({
                        title: 'Product Added!',
                        text: `Check your cart to view the added item`,
                        icon: 'success',
                        background: '#21272C',
                        color: '#ddd'
                    })
                }
                else {
                    dispatch({ type: 'ADD_CART_ERROR' })
                }
            })
            .catch(err => { console.log(err) })
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
        setProductDescription(dataAccessories[index])
        setDescriptionModal({ ...descriptionModal, modalDescription: true, indexDescription: index });
    }

    const toggleModal = () => setDescriptionModal({ ...descriptionModal, modalDescription: !modalDescription })

    const renderModalDescription = () => {
        return dataAccessories.map((val, index) => {
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
            <h2 className="productHeader">Accessories</h2>
            <div className='productList'>
                {renderProduk()}
            </div>

            {pager.pages && pager.pages.length &&
                <ul className="pagination">
                    <li className={`page-item first-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                        <Link to={{ search: `?page=1` }} className="page-link" onClick={() => setPage(pager.startPage)}>First</Link>
                    </li>
                    <li className={`page-item previous-item ${pager.currentPage === 1 ? 'disabled' : ''}`}>
                        <Link to={{ search: `?page=${pager.currentPage - 1}` }} className="page-link" onClick={() => setPage(pager.currentPage - 1)}>Previous</Link>
                    </li>
                    {pager.pages.map(page =>
                        <li key={page} className={`page-item number-item ${pager.currentPage === page ? 'active' : ''}`}>
                            <Link to={{ search: `?page=${page}` }} className="page-link" onClick={() => setPage(page)}>{page}</Link>
                        </li>
                    )}
                    <li className={`page-item next-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
                        <Link to={{ search: `?page=${pager.currentPage + 1}` }} className="page-link" onClick={() => setPage(pager.currentPage + 1)}>Next</Link>
                    </li>
                    <li className={`page-item last-item ${pager.currentPage === pager.totalPages ? 'disabled' : ''}`}>
                        <Link to={{ search: `?page=${pager.totalPages}` }} className="page-link" onClick={() => setPage(pager.totalPages)}>Last</Link>
                    </li>
                </ul>
            }

            <Footer />
        </div>
    );
}

export default AccessoriesProducts;