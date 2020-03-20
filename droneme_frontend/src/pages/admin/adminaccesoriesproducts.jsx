import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AdminSideLeft from '../../components/adminsideleft';
import NotFound from '../support/notfound'
import Axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { apiurl } from '../../support/apiurl'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

const AdminAccessoriesProducts = () => {

    // //============================== FUNCTION READ PRODUCT =================================================// //

    const redux = useSelector((state) => {
        return {
            roles: state.Auth.roles,
            username: state.Auth.username,
        }
    })
    const dispatch = useDispatch()
    const [dataProducts, setDataProducts] = useState([])
    const [pager, setPager] = useState({})
    const [page, setPage] = useState(1)

    useEffect(() => {
        Axios.get(`${apiurl}/products/getaccessoriesproducts/${page}`)
            .then((res) => {
                setDataProducts(res.data.pageOfData)
                setPager(res.data.pager)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        Axios.get(`${apiurl}/products/getaccessoriesproducts/${page}`)
            .then((res) => {
                setDataProducts(res.data.pageOfData)
                setPager(res.data.pager)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [page])

    const renderProducts = () => {
        return dataProducts.map((val, index) => {
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
        idproducts: 0,
        productname: '',
        productimage: null,
        productimagename: '',
        productprice: '',
        productstock: '',
        productdescription: '',
    })

    const editProduct = e => {
        const { name, value } = e.target
        setEditDataProduct({ ...editDataProduct, [name]: value })
    }

    const { idproducts, productname, productimage, productprice, productstock, productdescription } = editDataProduct

    const [editImage, setEditImage] = useState({
        imageEditFileName: 'Choose an image...',
        imageEditFile: undefined
    })

    const onEditImageFileChange = e => {
        console.log('e.target.files[0]', editImage);
        var file = e.target.files[0]
        if (file) {
            setEditDataProduct({ ...editDataProduct, productimagename: file.name, productimage: file })
        }
        else {
            setEditDataProduct({ ...editDataProduct, productimagename: 'Select Image', productimage: undefined })
        }
    }

    const [editModal, setEditModal] = useState({
        modalEdit: false,
        indexEdit: -1
    })

    const { indexEdit, modalEdit } = editModal

    const onModalOpen = (index) => {
        setEditDataProduct(dataProducts[index])
        setEditModal({ ...editModal, modalEdit: true, indexEdit: index });
    }

    const toggleModal = () => setEditModal({ ...editModal, modalEdit: !modalEdit })

    const renderModalEdit = () => {
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

    const onSaveEdit = () => {
        var data = {
            idproducts,
            productname,
            productprice,
            productimage,
            productstock,
            productdescription
        }
        var formdata = new FormData()
        var Headers = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        formdata.append('image', productimage)
        formdata.append('data', JSON.stringify(data))

        var id = data.idproducts

        Axios.put(`${apiurl}/products/editaccessoriesproducts/${id}`, formdata, Headers) // //menaruh hasil edit ke axios (db)
            .then((res) => { // //jika axios berhasil
                console.log('res', res);
                setDataProducts(res.data.dataDrone)
                setEditModal({ ...modalEdit, modalEdit: false, indexEdit: -1 })
            }).catch((err) => {
                console.log(err)
            })
    }

    // //============================== FUNCTION DELETE =======================================================// //

    const onDeleteDataProduct = (index) => {
        var id = dataProducts[index].idproducts
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
                    text: 'Your file has been deleted.',
                    icon: 'success',
                    background: '#21272C',
                    color: '#ddd'
                })
                    .then(() => {
                        Axios.delete(`${apiurl}/products/deleteproducts/${id}`)
                            .then(() => {
                                Axios.get(`${apiurl}/products/getaccessoriesproducts`)
                                    .then((res) => {
                                        setDataProducts(res.data.result)
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    })
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

    if (redux.roles === 1) { // //proteksi admin (hanya admin yang bisa akses)
        return <NotFound />;
    }
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
                            Accessories
                            </p>
                        <a href="/admindroneproducts" className="sub-header-title">
                            Drone Products
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
}

export default AdminAccessoriesProducts;