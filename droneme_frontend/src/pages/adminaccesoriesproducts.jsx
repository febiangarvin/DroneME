import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import AdminSideLeft from '../components/adminsideleft';
import NotFound from '../pages/notfound'
import Axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { apiurl } from '../support/apiurl'

const AdminDroneProducts = () => {

    const redux = useSelector((state) => {
        return {
            roles: state.Auth.roles,
            username: state.Auth.username,
        }
    })
    const dispatch = useDispatch()
    const [dataProducts, setDataProducts] = useState([])
    const [editModal, setEditModal] = useState({
        modalEdit: false,
        indexEdit: 0
    })
    const [deleteModal, setDeleteModal] = useState({
        modalDelete: false,
        indexDelete: 0
    })

    useEffect(() => {
        Axios.get(`${apiurl}/products/getaccessoriesproducts`)
            .then((res) => {
                setDataProducts(res.data.result)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const renderProducts = () => {
        return dataProducts.map((val, index) => {
            return (
                <tr key={index}>
                    <td>{val.productname}</td>
                    <td>{val.productprice}</td>
                    <td>{val.productstock}</td>
                    <td>{val.producttypes}</td>
                    <td>
                        <button className='btn btn-success mr-1 ml-1' onClick={() => { setEditModal({ ...editModal, modalEdit: true, indexEdit: index }) }}>EDIT</button>
                        <button className='btn btn-danger mr-1 ml-1' onClick={() => { setDeleteModal({ ...deleteModal, modalDelete: true, indexDelete: index }) }}>DELETE</button>
                    </td>
                </tr>
            )
        })
    }

    if (redux.roles === 2) { // //proteksi admin (hanya admin yang bisa akses)
        return <NotFound />;
    }
    return (
        <div>

            <AdminSideLeft />

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

export default AdminDroneProducts;