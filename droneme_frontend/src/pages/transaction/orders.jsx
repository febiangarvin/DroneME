import React, { useEffect, useState } from 'react';
import Header from '../../components/header'
import NotFound from '../support/notfound'
import Axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { UserGetCheckout } from '../../redux/actions'
import { apiurl } from '../../support/apiurl'

const Orders = () => {

    // //============================== FUNCTION READ ORDERS ==================================================// //

    // const { datacart } = useSelector(state => state.HomeReducers)
    // const dispatch = useDispatch()
    // const [dataOrders, setDataOrders] = useState([])

    // const renderOrders = () => {
    //     return datacart.map((val, index) => {
    //         // return console.log(val);
    //         return (
    //             <tr key={index}>
    //                 <td>{val.iduniquetransactions}</td>
    //                 <td>{val.totalproce}</td>
    //                 <td>
    //                     <a href="/orderdetail" className="btn-primary ml-3">Details</a>
    //                 </td>
    //                 <td>{val.paymentstatus}</td>
    //             </tr>
    //         )
    //     })
    // }

    // //============================== RENDER AKHIR ==========================================================// //

    return (
        <div>
            <Header />

            <div className="main-content">
                <div className="header row">
                    <div className="col-md-12">
                        <p className="header-title" style={{ marginRight: '200px' }}>
                            My Orders
                        </p>
                    </div>
                </div>
                <div className="row report-group">
                    <div className="col-md-12">
                        <div className="item-big-report col-md-12">
                            <table className="table-tiketsaya table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">Transaction Unique ID</th>
                                        <th scope="col">Total Price</th>
                                        <th scope="col">Details</th>
                                        <th scope="col">Payment Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {/* {renderOrders()} */}
                                        <td>35467890</td>
                                        <td>Rp10.000.000</td>
                                        <td>
                                            <a href="/orderdetail" className="btn-primary ml-3">Details</a>
                                        </td>
                                        <td>Waiting for Payment</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Orders;