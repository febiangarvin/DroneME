import React, { useEffect, useState } from 'react';
import Header from '../components/header'
import NotFound from '../pages/notfound'
import Axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { UserGetCart } from '../redux/actions'
import { apiurl } from '../support/apiurl'
import Swal from 'sweetalert2'

const Cart = () => {

    // //============================== FUNCTION READ CART ====================================================// //

    const { datacart } = useSelector(state => state.HomeReducers)
    const dispatch = useDispatch()
    const [dataCart, setDataCart] = useState([])

    const renderCart = () => {
        return datacart.map((val, index) => {
            // return console.log(val);
            return (
                <tr key={index}>
                    <td>{val.productname}</td>
                    <td>Rp{val.productprice}</td>
                    <td>
                        <input type="number" className="form-control" style={{ width: '55px', marginLeft: '10px' }} name='quantity' min={1} />
                    </td>
                    <td>
                        <button className='btn btn-danger mr-1 ml-1' onClick={() => onDeleteDataCart(index)}>DELETE</button>
                    </td>
                </tr>
            )
        })
    }

    // //============================== FUNCTION DELETE CART ===================================================// //

    const onDeleteDataCart = (index) => {
        var id = datacart[index].idtransactions
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
                    text: 'An item in your cart has been deleted.',
                    icon: 'success',
                    background: '#21272C',
                    color: '#ddd'
                })
                    .then(() => {
                        Axios.delete(`${apiurl}/users/deletecart/${id}`)
                            .then(() => {
                                dispatch(UserGetCart())
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

    return (
        <div>
            <Header />

            <div className="main-content">
                <div className="header row">
                    <div className="col-md-12">
                        <p className="header-title" style={{ marginRight: '150px' }}>
                            Cart
                        </p>
                    </div>
                </div>

                <div className="row report-group">
                    <div className="col-md-12">
                        <div className="item-big-report col-md-12">
                            <table className="table-wisata table-tiketsaya table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Item Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderCart()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <br /><br />

                <div className="header row">
                    <div className="col-md-12">
                        <p className="header-title" style={{ marginRight: '130px' }}>
                            Receiver Details
                        </p>
                    </div>
                </div>

                <div className="row report-group">
                    <div className="col-md-12">
                        <div className="item-big-report col-md-12">
                            <table className="table-wisata table-tiketsaya table table-borderless">
                                <tbody>
                                    <p style={{ color: 'white' }}> Street Address</p>
                                    <textarea type="text" className="form-control input-type-primary" name='address' placeholder="Street Address" />
                                    <p style={{ color: 'white' }}> Province</p>
                                    <input type="text" className="form-control input-type-primary" name='province' placeholder="Province" />
                                    <p style={{ color: 'white' }}> Postal Code</p>
                                    <input type="number" className="form-control input-type-primary" name='postalcode' placeholder="Postal Code" />
                                    <p style={{ color: 'white' }}> Receiver Name</p>
                                    <input type="text" className="form-control input-type-primary" name='receiver' placeholder="Receiver Name" />
                                </tbody>
                            </table>
                        </div>
                        <br />
                        <div className="form-action">
                            <a style={{ marginLeft: '400px', paddingLeft: 20 }} href="/droneproducts" className="btn-medium">Return</a>
                            <a style={{ marginLeft: '25px', paddingLeft: 20 }} href="/checkout" className="btn-medium">Checkout</a>
                        </div>
                        <br /><br />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Cart;