import React, { useEffect, useState } from 'react';
import AdminSideLeft from '../../components/adminsideleft';
import NotFound from '../support/notfound'
import Axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { apiurl } from '../../support/apiurl'

const AdminSales = () => {

    // //============================== FUNCTION READ CHECKOUTS ===============================================// //

    const [dataCheckout, setDataCheckout] = useState([])

    useEffect(() => {
        Axios.get(`${apiurl}/admin/admingetcheckout`)
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
                    <td>{val.username}</td>
                    <td>Rp {val.totalprice}</td>
                    <td>
                        <a href={`/orderdetail/${val.idtransactions}`} className="btn-primary ml-3">Details</a>
                    </td>
                    <td>{val.paymentstatus}</td>
                </tr>
            )
        })
    }

    // //============================== RENDER AKHIR ==========================================================// //    

    return (
        <div>
            <AdminSideLeft />

            <div className="main-content">
                <div className="header row">
                    <div className="col-md-12">
                        <p className="header-title">
                            Product Sales
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
                                        <th scope="col">Username</th>
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

export default AdminSales;