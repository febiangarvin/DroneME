import React, { useEffect, useState } from 'react';
import Header from '../../components/header'
import NotFound from '../support/notfound'
import Axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { UserGetCheckout } from '../../redux/actions'
import { apiurl } from '../../support/apiurl'

const PaidOrders = () => {

    // //============================== FUNCTION READ ORDERS ==================================================// //

    const { datacheckout } = useSelector(state => state.OrderReducers)
    const dispatch = useDispatch()
    const [dataCheckout, setDataCheckout] = useState([])

    useEffect(() => {
        const idusers = localStorage.getItem('droneme')
        Axios.get(`${apiurl}/users/usergetpaidcheckout/${idusers}`)
            .then((res) => {
                setDataCheckout(res.data.result)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const renderCheckout = () => {
        return dataCheckout.map((val, index) => {
            return (
                <tr key={index}>
                    <td>{val.idtransactions}</td>
                    <td>Rp {val.totalprice}</td>
                    <td>
                        <a href={`/paidorderdetail/${val.idtransactions}`} className="btn-primary ml-3">Details</a>
                    </td>
                    <td>{val.paymentstatus}</td>
                </tr>
            )
        })
    }

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
                        <br /><br />
                    </div>
                    <div className="col-md-8 row" style={{ marginLeft: '75px' }}>
                        <p className="sub-header-title" style={{ fontWeight: 'bolder' }}>
                            Orders I Have Paid
                            </p>
                        <a href="/orders" className="sub-header-title">
                            Unpaid Orders
                            </a>
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
                                    {renderCheckout()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaidOrders;