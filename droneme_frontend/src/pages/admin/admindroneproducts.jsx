import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AdminSideLeft from '../../components/adminsideleft';
import NotFound from '../support/notfound'
import Axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { apiurl } from '../../support/apiurl'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

const AdminDroneProducts = () => {

    // //============================== FUNCTION READ PRODUCT =================================================// //

    const redux = useSelector((state) => {
        return {
            roles: state.Auth.roles,
            username: state.Auth.username,
        }
    })

    const dispatch = useDispatch()

    const [dataProducts, setDataProducts] = useState([]) // //state untuk mengambil product

    const [pager, setPager] = useState({}) // //state object untuk mengambil pager (pagination)

    const [page, setPage] = useState(1) // //state untuk menentukan posisi page (dengan state awal angka 1)

    const [editDataPage, setEditDataPage] = useState(false)

    const [deleteDataPage, setDeleteDataPage] = useState(false)

    useEffect(() => {// //function get untuk mengambil product
        Axios.get(`${apiurl}/products/getdroneproducts/${page}`)
            .then((res) => {
                setDataProducts(res.data.pageOfData)
                setPager(res.data.pager)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => { // //gunakan useEffect dengan jenis update
        Axios.get(`${apiurl}/products/getdroneproducts/${page}`)
            .then((res) => {
                setDataProducts(res.data.pageOfData)
                setPager(res.data.pager)
                setEditDataPage(false)
                setDeleteDataPage(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [page, editDataPage, deleteDataPage]) // //update untuk state page

    const renderProducts = () => {
        // //me-render tampilan product
        return dataProducts.map((val, index) => { // //melakukan untuk mapping data product (menyesuaikan types)
            return (
                <tr key={index}>
                    <td>{val.productname}</td>
                    <td>Rp {val.productprice}</td>
                    <td>{val.productstock} items</td>
                    <td>{val.producttypes}</td>
                    <td>
                        <button className='btn btn-success mr-1 ml-1' onClick={() => onModalOpen(index)}>EDIT</button>
                        <button className='btn btn-danger mr-1 ml-1' onClick={() => onDeleteDataProduct(index)}>DELETE</button>
                    </td>
                </tr>
            )
        })
    }

    // //============================== FUNCTION UPDATE =======================================================// //

    const [editDataProduct, setEditDataProduct] = useState({
        // //destructuring state untuk melakukan edit product, beserta data tertentu yang akan dikirim
        idproducts: 0,
        productname: '',
        productimage: null,
        productimagename: '',
        productprice: '',
        productstock: '',
        productdescription: '',
    })

    const editProduct = e => { // //variable edit dengan parameter e (event)
        const { name, value } = e.target // //variable destructuring name dan value yang diwakilkan dengan e.target
        // //menggunakan state set dengan isi object spread edit data (beserta data tertntu yang dikirim), dan name beserta valuenya
        setEditDataProduct({ ...editDataProduct, [name]: value })
    }

    // //variable object dari state awal
    const { idproducts, productname, productimage, productprice, productstock, productdescription } = editDataProduct

    const [editImage, setEditImage] = useState({ // //state untuk edit image
        imageEditFileName: 'Choose an image...',
        imageEditFile: undefined
    })

    const onEditImageFileChange = e => { // //variable untuk edit image file
        console.log('e.target.files[0]', editImage);
        var file = e.target.files[0] // //variable yang berisi target file
        if (file) { // //jika terdapat file
            setEditDataProduct({ ...editDataProduct, productimagename: file.name, productimage: file })
        }
        else {
            setEditDataProduct({ ...editDataProduct, productimagename: 'Select Image', productimage: undefined })
        }
    }

    const [editModal, setEditModal] = useState({
        // //destructuring state untuk menampilkan modal, beserta data spesifik yang akan dikirim
        modalEdit: false,
        indexEdit: -1
    })

    const { indexEdit, modalEdit } = editModal // //variable object dari state awal

    const onModalOpen = (index) => { // //function membuka modal beserta index per product
        setEditDataProduct(dataProducts[index]) // //mengambil description per index product
        // //men-trigger modal dengan spread objek modal. Lalu dibuat true. Beserta menampilkan index description per index product
        setEditModal({ ...editModal, modalEdit: true, indexEdit: index });
    }

    // //function toggle pada modal. Melakukan callback trigger modal dengan spread objek modal. Dan menonaktifkan dekscription pada modal
    const toggleModal = () => setEditModal({ ...editModal, modalEdit: !modalEdit })

    const renderModalEdit = () => { // //function render akhir modal edit
        return (
            <Modal isOpen={modalEdit} toggle={toggleModal}>
                <ModalBody>
                    <input type="text" className="form-control input-type-primary" onChange={editProduct} name='productname' defaultValue={productname} />
                    <input type="file" className="form-control input-type-primary" style={{ padding: 2 }} onChange={onEditImageFileChange} name='productimage' />
                    <input type="number" className="form-control input-type-primary" onChange={editProduct} name='productprice' defaultValue={productprice} />
                    <input type="number" className="form-control input-type-primary" onChange={editProduct} name='productstock' defaultValue={productstock} />
                    <input type="text" className="form-control input-type-primary" onChange={editProduct} name='productdescription' defaultValue={productdescription} />
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={onSaveEdit}>Edit</Button>
                    <Button color="secondary" onClick={toggleModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }

    const onSaveEdit = () => { // //function eksekusi edit (onClick)
        var data = { // //variable data yang akan dikirim
            idproducts,
            productname,
            productprice,
            productimage,
            productstock,
            productdescription
        }
        var formdata = new FormData() // //variable formdata untuk mengirim image
        var Headers = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        formdata.append('image', productimage) // //dengan append, kita mengirim formdata yang berupa image dengan data productImage
        formdata.append('data', JSON.stringify(data)) // //dengan append, kita mengirim formdata yang berupa data yang telah dilakukan method stringify

        var id = data.idproducts // //variable id yang berupa data dari per idproducts

        Axios.put(`${apiurl}/products/editdroneproducts/${id}`, formdata, Headers) // //melakukan post dengan 2 variable
            .then((res) => { // //jika axios berhasil
                console.log('res', res);
                // setDataProducts(res.data.dataDrone)
                setEditDataPage(true)
                setEditModal({ ...modalEdit, modalEdit: false, indexEdit: -1 })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    // //============================== FUNCTION DELETE =======================================================// //

    const onDeleteDataProduct = (index) => { // //function delete per product di data product
        var id = dataProducts[index].idproducts // //variable id berdasrkan index per cart dari id transactiondetails (tabel)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            background: '#21272C',
            color: '#ddd'
        }).then((res1) => {
            if (res1.value) {
                Swal.fire({
                    title: 'Deleted!',
                    text: 'The product has been deleted.',
                    icon: 'success',
                    background: '#21272C',
                    color: '#ddd'
                })
                    .then(() => {
                        Axios.delete(`${apiurl}/products/deleteproducts/${id}`) // //jika confirm, maka melakukan delete
                            .then(() => {
                                setDeleteDataPage(true)
                                // Axios.get(`${apiurl}/products/getdroneproducts`) // //setelahnya melakukan get lagi
                                //     .then((res) => {
                                //         setDataProducts(res.data.result)
                                //     })
                                //     .catch((error) => {
                                //         console.log(error);
                                // })
                            })
                            .catch((error) => {
                                console.log(error);
                            })
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        })
    }

    // //============================== RENDER AKHIR ==========================================================// //

    // if (redux.username !== 'admin') { // //proteksi admin (hanya admin yang bisa akses)
    //     return <NotFound />;
    // }
    // else {
    return (
        <div>
            <AdminSideLeft />
            {renderModalEdit()}
            <div className="main-content">

                <div className="header row">
                    <div className="col-md-12">
                        <p className="header-title">
                            Manage Products
                            </p>
                    </div>
                    <div className="col-md-12 row">
                        <a href="/admindroneaccessoriesproducts" className="sub-header-title">
                            Drone Accessories
                            </a>
                        <p className="sub-header-title" style={{ fontWeight: 'bolder' }}>
                            Drone Products
                            </p>
                        <a href="/adminaccessoriesproducts" className="sub-header-title">
                            Accessories
                            </a>
                    </div>
                </div>

                <div className="row report-group">
                    <div className="col-md-12">
                        <div className="item-big-report col-md-12">

                            <table className="table-wisata table-tiketsaya table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Stock</th>
                                        <th scope="col">Product Type</th>
                                        <th scope="col">Admin's Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderProducts()}
                                </tbody>
                            </table>

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

                        </div>
                        <br />
                        <div className="form-action">
                            <a style={{ marginLeft: '450px', paddingLeft: 19 }} href="/adminaddproducts" className="btn-medium">Add Product</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
    // }
}

export default AdminDroneProducts;