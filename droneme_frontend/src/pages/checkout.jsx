import React, { useEffect, useState } from 'react';
import Header from '../components/header'
import NotFound from '../pages/notfound'
import Axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { UserGetCheckout } from '../redux/actions'
import { apiurl } from '../support/apiurl'
import Swal from 'sweetalert2'

const Checkout = () => {

    // //============================== FUNCTION READ CART ====================================================// //

    const { datacart } = useSelector(state => state.HomeReducers)
    const dispatch = useDispatch()
    const [dataCheckout, setDataCheckout] = useState([])

    const renderCart = () => {
        return datacart.map((val, index) => {
            // return console.log(val);
            return (
                <tr key={index}>
                    <td>{val.productname}</td>
                    <td>Rp{val.productprice}</td>
                    <td>{val.quantity}</td>
                </tr>
            )
        })
    }

    const renderReceiver = () => {
        return datacart.map((val, index) => {
            // return console.log(val);
            return (
                <tr key={index}>
                    <td>Your Transaction ID : {val.iduniquetransactions}</td>
                    <td>Receiver Name : {val.receiver}</td>
                    <td>Address : {val.address}</td>
                    <td>Province : {val.province}</td>
                    <td>Postal Code : {val.postalcode}</td>
                </tr>
            )
        })
    }

    // //============================== FUNCTION DELETE CART ===================================================// //

    const onCancelCheckout = (index) => {
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
                    text: '',
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
                            Checkout
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
                                    {renderReceiver()}
                                </tbody>
                            </table>
                        </div>
                        <br />
                        <div className="form-action">
                            <button className='btn btn-danger mr-1 ml-1' onClick={() => onCancelCheckout(index)}>CANCEL</button>
                            <button className='btn btn-success mr-1 ml-1'>CONFIRM</button>
                        </div>
                        <br /><br />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Checkout;