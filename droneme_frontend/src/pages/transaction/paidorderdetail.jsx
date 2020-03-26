import React, { useEffect, useState } from 'react';
import Header from '../../components/header'
import NotFound from '../support/notfound'
import Axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { UserGetCheckoutDetail } from '../../redux/actions'
import { apiurl, apiImage } from '../../support/apiurl'
import Swal from 'sweetalert2'
import { Link, Redirect } from 'react-router-dom';

const PaidOrderDetail = (props) => {

    // //============================== FUNCTION READ ORDER DETAIL ================================================// //

    const { datacart } = useSelector(state => state.HomeReducers)
    const { username, address, province, postalcode } = useSelector(state => state.Auth)
    const dispatch = useDispatch()
    const [dataCheckoutDetail, setDataCheckoutDetail] = useState([])
    const [dataReceiver, setDataReceiver] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [dataPaymentImage, setDataPaymentImage] = useState('Image')

    console.log(props.match.params);

    useEffect(() => {
        const idusers = localStorage.getItem('droneme')
        const idtransactions = props.match.params.idtransactions
        Axios.get(`${apiurl}/users/usergetpaidcheckoutdetail/${idusers}/${idtransactions}`)
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
    }

    useEffect(() => {
        let total = 0
        for (let i = 0; i < dataCheckoutDetail.length; i++) {
            total += dataCheckoutDetail[i].productprice * dataCheckoutDetail[i].quantity
        }
        setTotalPrice(total)
    }, [dataCheckoutDetail])

    const renderReceiver = () => {
        return (
            <tbody style={{ fontSize: '20px', color: 'white' }}>
                <tr>
                    Receiver Name : {username}
                </tr>
                <tr>
                    Address : {address}
                </tr>
                <tr>
                    Province : {province}
                </tr>
                <tr>
                    Postal Code : {postalcode}
                </tr>
            </tbody>
        )
    }

    // //============================== RENDER AKHIR ==========================================================// //

    return (

        <div>
            <Header />

            <div className="main-content">
                <div className="header row">
                    <div className="col-md-12">
                        <p className="header-title" style={{ marginRight: '150px' }}>
                            Items You Ordered :
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
                                        Your Grand Total : Rp {totalPrice}
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
                            Receiver and Address :
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
                    <a style={{ marginLeft: '450px', padding: 20 }} href="/paidorders" className="btn-danger">Return</a>
                </div>

                <br /><br />
            </div>
        </div>
    );
}

export default PaidOrderDetail