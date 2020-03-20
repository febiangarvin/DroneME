import React, { useEffect, useState } from 'react';
import Header from '../../components/header'
import NotFound from '../support/notfound'
import Axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { UserGetCheckout } from '../../redux/actions'
import { apiurl } from '../../support/apiurl'
import Swal from 'sweetalert2'

const Checkout = () => {

    // //============================== FUNCTION READ CHECKOUT ================================================// //

    // const { datacart } = useSelector(state => state.HomeReducers)
    // const dispatch = useDispatch()
    // const [dataCheckout, setDataCheckout] = useState([])

    // const renderCart = () => {
    //     return datacart.map((val, index) => {
    //         // return console.log(val);
    //         return (
    //             <tr key={index}>
    //                 <td>{val.productname}</td>
    //                 <td>Rp{val.productprice}</td>
    //                 <td>{val.quantity}</td>
    //             </tr>
    //         )
    //     })
    // }

    // const renderTotalPrice = () => {
    //     return datacart.map((val, index) => {
    //         return (
    //             <tr key={index}>
    //                 <td>{val.totalproce}</td>
    //             </tr>
    //         )
    //     })
    // }

    // const renderReceiver = () => {
    //     return datacart.map((val, index) => {
    //         // return console.log(val);
    //         return (
    //             <tr key={index}>
    //                 Your Transaction ID : {val.iduniquetransactions}
    //             </tr>
    //             <tr key={index}>
    //                 Receiver Name : {val.receiver}
    //             </tr>
    //             <tr key={index}>
    //                 Address : {val.address}
    //             </tr>
    //             <tr key={index}>
    //                 Province : {val.province}
    //             </tr>
    //             <tr key={index}>
    //                 Postal Code : {val.postalcode}
    //             </tr>
    //         )
    //     })
    // }

    // //============================== FUNCTION DELETE CHECKOUT ==============================================// //

    // const onCancelCheckout = (index) => {
    //     var id = datacart[index].idtransactions
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!',
    //         background: '#21272C',
    //         color: '#ddd'
    //     }).then((res1) => {
    //         if (res1.value) {
    //             Swal.fire({
    //                 title: 'Deleted!',
    //                 text: '',
    //                 icon: 'success',
    //                 background: '#21272C',
    //                 color: '#ddd'
    //             })
    //                 .then(() => {
    //                     Axios.delete(`${apiurl}/users/deletecart/${id}`)
    //                         .then(() => {
    //                             dispatch(UserGetCart())
    //                         })
    //                         .catch((error) => {
    //                             console.log(error);
    //                         })
    //                 })
    //                 .catch((error) => {
    //                     console.log(error);
    //                 })
    //         }
    //     })
    // }

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
                                    {/* {renderCart()} */}
                                    <tr>
                                        <td>DJI Phantom 4 Pro</td>
                                        <td>Rp 20.000.000</td>
                                        <td>1</td>
                                    </tr>
                                    <br /><br />
                                </tbody>
                                <tfooter style={{ fontSize: '20px', color: 'white' }}>
                                    {/* {renderTotalPrice()} */}
                                    <tr>
                                        Grand Total : Rp 20.000.000
                                    </tr>
                                </tfooter>
                            </table>
                        </div>
                    </div>
                </div>

                <br /><br />

                <div className="form-action" style={{ marginLeft: '400px' }}>
                    {/* <button className='btn btn-danger mr-1 ml-1' onClick={() => onCancelCheckout(index)}>CANCEL</button> */}
                    <a href='/usertransaction/cart' className='btn btn-danger mr-2 ml-2'>CANCEL</a>
                    <a href='/orders' className='btn btn-success mr-2 ml-2'>CONFIRM</a>
                </div>

                <br /><br />
            </div>

        </div>
    );
}

export default Checkout;