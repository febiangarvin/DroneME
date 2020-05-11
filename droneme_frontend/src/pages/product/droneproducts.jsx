import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Header from '../../components/header'
import Footer from '../../components/footer';
import Axios from 'axios'
import NotFound from '../support/notfound'
import { apiurl, apiImage } from '../../support/apiurl'
import { useDispatch, useSelector } from 'react-redux'
import { UserGetCart } from '../../redux/actions'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

const DroneProducts = () => {

    // //============================== FUNCTION READ =========================================================// //

    const redux = useSelector((state) => {
        return {
            roles: state.Auth.roles,
            username: state.Auth.username,
        }
    })

    const [dataDrone, setDataDrone] = useState([]) // //state untuk mengambil product

    const [pager, setPager] = useState({}) // //state object untuk mengambil pager (pagination)

    const [page, setPage] = useState(1) // //state untuk menentukan posisi page (dengan state awal angka 1)

    const [productQuantity, setProductQuantity] = useState(1) // //state untuk menentukan banyak pembelian product (dengan state awal angka 1)

    const dispatch = useDispatch()

    useEffect(() => { // //function get untuk mengambil product
        Axios.get(`${apiurl}/products/getdroneproducts/${page}`)
            .then((res) => {
                console.log('res', res.data);
                setDataDrone(res.data.pageOfData)
                setPager(res.data.pager)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => { // //gunakan useEffect dengan jenis update
        Axios.get(`${apiurl}/products/getdroneproducts/${page}`)
            .then((res) => {
                console.log('res', res.data);
                setDataDrone(res.data.pageOfData)
                setPager(res.data.pager)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [page]) // //update untuk state page

    const renderProduk = () => { // //me-render tampilan product
        if (redux.username == 'admin') { // //proteksi admin (tampilan admin )
            return dataDrone.map((val, index) => { // //melakukan untuk mapping data product (menyesuaikan types)
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
                                {/* <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                    We have, <h4>{val.productstock}</h4> items left in store
                                </p> */}
                            </center>
                            <br />
                        </div>
                    </div>
                )
            })
        }
        else {
            return dataDrone.map((val, index) => { // //melakukan untuk mapping data product (menyesuaikan types)
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
                                {/* <p style={{ fontFamily: "Montserrat, Overpass, Trebuchet MS, Arial, sans-serif" }}>
                                We have, <h4>{val.productstock}</h4> items left in store
                            </p> */}
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
    }

    // //============================== FUNCTION ADD PRODUCT ==================================================// //

    const addProduct = (index) => { // //function add product dengan parameter index
        const idusers = localStorage.getItem('droneme') // //mengirim variable berupa idusers yang diambil dari localstorage
        dispatch({ type: 'ADD_CART_LOADING' }) // //men-trigger dispatch dari reducer dengan type LOADING
        // //variable untuk mengirim product dengan datanya
        const newDataProduct = { idproducts: dataDrone[index].idproducts, idusers: idusers, quantity: parseInt(productQuantity) }
        Axios.post(`${apiurl}/users/addcart`, newDataProduct) // //melakukan post dengan sebuah variable
            .then(res => {
                // if (redux.username === 'admin') { // //proteksi admin (hanya admin yang bisa akses)
                //     alert('Login as a User Please')
                // }
                // else {
                if (res.data.result) { // //jika ada result, men-trigger sebuah dispatch dengan type SUCCESS beserta function di actions
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
                    dispatch({ type: 'ADD_CART_ERROR' }) // //jika tidak ada result, men-trigger sebuah dispatch dengan type ERROR
                    // }
                }
            })
            .catch(err => { console.log(err) })
    }

    // //============================== FUNCTION OPEN MODAL PRODUCT DESCRIPTION ===============================// //

    const [productDescription, setProductDescription] = useState({
        // //destructuring state untuk menampilkan productdescription, beserta data spesifik yang akan dikirim
        idproducts: 0,
        productname: '',
        productdescription: '',
    })

    const { idproducts, productname, productdescription } = productDescription // //variable object dari state awal

    const [descriptionModal, setDescriptionModal] = useState({
        // //destructuring state untuk menampilkan modal, beserta data spesifik yang akan dikirim
        modalDescription: false,
        indexDescription: -1
    })

    const { indexDescription, modalDescription } = descriptionModal // //variable object dari state awal

    const onModalOpen = (index) => { // //function membuka modal beserta index per product
        setProductDescription(dataDrone[index]) // //mengambil description per index product
        // //men-trigger modal dengan spread objek modal. Lalu dibuat true. Beserta menampilkan index description per index product
        setDescriptionModal({ ...descriptionModal, modalDescription: true, indexDescription: index });
    }

    // //function toggle pada modal. Melakukan callback trigger modal dengan spread objek modal. Dan menonaktifkan dekscription pada modal
    const toggleModal = () => setDescriptionModal({ ...descriptionModal, modalDescription: !modalDescription })

    const renderModalDescription = () => { // //function render akhir modal description
        return dataDrone.map((val, index) => { // //melakukan map data product dengan index
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
            <h2 className="productHeader">Drone Products</h2>
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

export default DroneProducts;
