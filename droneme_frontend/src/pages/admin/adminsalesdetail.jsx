import React, { useEffect, useState } from 'react';
import AdminSideLeft from '../../components/adminsideleft';
import NotFound from '../support/notfound'
import Axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { apiurl, apiImage } from '../../support/apiurl'
import Swal from 'sweetalert2'
import { Link, Redirect } from 'react-router-dom';

const AdminSalesDetail = (props) => {

    // //============================== FUNCTION READ ORDER DETAIL ============================================// //

    const redux = useSelector((state) => {
        return {
            roles: state.Auth.roles,
            username: state.Auth.username,
        }
    })

    const [dataCheckoutDetail, setDataCheckoutDetail] = useState([])
    const { username, address, province, postalcode } = useSelector(state => state.Auth)
    const [dataReceiver, setDataReceiver] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [dataPaymentImage, setDataPaymentImage] = useState('Image')

    useEffect(() => {
        const idtransactions = props.match.params.idtransactions
        Axios.get(`${apiurl}/admin/admingetunapprovedcheckoutdetail/${idtransactions}`)
            .then((res) => {
                setDataCheckoutDetail(res.data.result)
                setDataPaymentImage(res.data.paymentimage)
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
        // return dataCheckoutDetail.map((val, index) => {
        //     console.log(val);
        return (
            <tbody>
                <tr>
                    <img
                        src={`${apiImage + dataPaymentImage}`}
                        alt='paymentImage'
                        style={{ alignItems: 'center', height: '100%', width: '100%' }}
                    />
                </tr>
            </tbody>
        )
        // })
    }

    useEffect(() => {
        let total = 0
        for (let i = 0; i < dataCheckoutDetail.length; i++) {
            total += dataCheckoutDetail[i].productprice * dataCheckoutDetail[i].quantity
        }
        setTotalPrice(total)
    }, [dataCheckoutDetail])

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

    // //============================== FUNCTION UPDATE PAYMENT STATUS =======+================================// //

    const onApprovePaymentClick = () => {
        const idtransactions = props.match.params.idtransactions
        Axios.post(`${apiurl}/admin/approvepayment/${idtransactions}`)
            .then(() => {
                return <Redirect to='/adminsales' />
            })
    }

    // const onRejectPaymentClick = () => {
    //     const idtransactions = props.match.params.idtransactions
    //     Axios.post(`${apiurl}/admin/rejectpayment/${idtransactions}`)
    //         .then(() => {
    //             return <Link to='/adminsales' />
    //         })
    // }

    // //============================== RENDER AKHIR ==========================================================// //

    if (redux.username !== 'admin') { // //proteksi admin (hanya admin yang bisa akses)
        return <NotFound />;
    }
    else {
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
                        <a style={{ marginLeft: '400px', padding: 20 }} href="/adminsales" className="btn-danger">Return</a>
                        {/* <a style={{ marginLeft: '25px', padding: 20 }} onClick={onRejectPaymentClick} className="btn-warning">REJECT !</a> */}
                        <a style={{ marginLeft: '25px', padding: 20 }} onClick={onApprovePaymentClick} href="/adminsales" className="btn-primary">APPROVE !</a>
                    </div>

                    <br /><br />
                </div>
            </div>

        );
    }
}

export default AdminSalesDetail;