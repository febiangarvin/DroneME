import React, { useEffect, useState } from 'react';
import AdminSideLeft from '../../components/adminsideleft';
import NotFound from '../support/notfound'
import Axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { apiurl, apiImage } from '../../support/apiurl'
import Swal from 'sweetalert2'
import { Link, Redirect } from 'react-router-dom';

const AdminApprovedSalesDetail = (props) => {

    // //============================== FUNCTION READ ORDER DETAIL ============================================// //

    const [dataCheckoutDetail, setDataCheckoutDetail] = useState([])

    useEffect(() => {
        const idtransactions = props.match.params.idtransactions
        Axios.get(`${apiurl}/admin/admingetapprovedpaymentdetail/${idtransactions}`)
            .then((res) => {
                setDataCheckoutDetail(res.data.result)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const renderCheckoutDetail = () => {
        return dataCheckoutDetail.map((val, index) => {
            return (
                <tr key={index}>
                    <td>{val.productname}</td>
                    <td>Rp {val.productprice}</td>
                    <td>{val.quantity}</td>
                </tr>
            )
        })
    }

    const renderPaymentImage = () => {
        return dataCheckoutDetail.map((val, index) => {
            return (
                <tbody key={index}>
                    <tr>
                        <img
                            src={`${apiImage + val.paymentimage}`}
                            alt='paymentImage'
                            style={{ alignItems: 'center', height: '100%', width: '100%' }}
                        />
                    </tr>
                </tbody>
            )
        })
    }

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        let total = 0
        for (let i = 0; i < dataCheckoutDetail.length; i++) {
            total += dataCheckoutDetail[i].productprice * dataCheckoutDetail[i].quantity
        }
        setTotalPrice(total)
    }, [dataCheckoutDetail])

    const { username, address, province, postalcode } = useSelector(state => state.Auth)
    const [dataReceiver, setDataReceiver] = useState([])

    useEffect(() => {
        const idtransactions = props.match.params.idtransactions
        Axios.get(`${apiurl}/admin/admingetreceiver/${idtransactions}`)
            .then((res) => {
                setDataReceiver(res.data.result)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const renderReceiver = () => {
        return dataReceiver.map((val, index) => {
            return (
                <tbody style={{ fontSize: '20px', color: 'white' }} key={index}>
                    <tr>
                        Receiver Name : {val.username}
                    </tr>
                    <br />
                    <tr>
                        Address : {val.address}
                    </tr>
                    <br />
                    <tr>
                        Province : {val.province}
                    </tr>
                    <br />
                    <tr>
                        Postal Code : {val.postalcode}
                    </tr>
                </tbody>
            )
        })
    }

    // //============================== RENDER AKHIR ==========================================================// //

    return (
        <div>
            <div className="main-content">
                <div className="header row">
                    <div className="col-md-12" style={{ marginLeft: -80 }}>
                        <p className="header-title">
                            Transaction Details :
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
                                    {renderCheckoutDetail()}
                                </tbody>
                                <tfooter style={{ fontSize: '20px', color: 'white' }}>
                                    <br />
                                    <tr>
                                        Grand Total : Rp {totalPrice}
                                    </tr>
                                </tfooter>
                            </table>
                        </div>
                    </div>
                </div>

                <br /><br />

                <div className="header row">
                    <div className="col-md-12">
                        <p className="header-title" style={{ marginRight: '130px' }}>
                            Shipment Location :
                        </p>
                    </div>
                </div>
                <div className="row report-group">
                    <div className="col-md-12">
                        <div className="item-big-report col-md-12">
                            <table className="table-wisata table table-borderless">
                                {renderReceiver()}
                            </table>
                        </div>
                    </div>
                </div>

                <br /><br />

                <div className="header row">
                    <div className="col-md-12">
                        <p className="header-title" style={{ marginRight: '130px' }}>
                            Payment Image :
                        </p>
                    </div>
                </div>
                <div className="row report-group">
                    <div className="col-md-12">
                        <div className="item-big-report col-md-12">
                            <table className="table-wisata table table-borderless">
                                {renderPaymentImage()}
                            </table>
                        </div>
                    </div>
                </div>

                <br /><br />

                <div className="form-action">
                    <a style={{ marginLeft: '450px', padding: 20 }} href="/adminapprovedsales" className="btn-danger">Return</a>
                </div>

                <br /><br />
            </div>
        </div>

    );
}

export default AdminApprovedSalesDetail;