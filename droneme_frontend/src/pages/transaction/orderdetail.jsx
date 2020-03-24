import React, { useEffect, useState } from 'react';
import Header from '../../components/header'
import NotFound from '../support/notfound'
import Axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { UserGetCheckoutDetail } from '../../redux/actions'
import { apiurl } from '../../support/apiurl'
import Swal from 'sweetalert2'
import { Link, Redirect } from 'react-router-dom';

const OrderDetail = (props) => {

    // //============================== FUNCTION READ ORDER DETAIL ================================================// //

    const { datacart } = useSelector(state => state.HomeReducers)
    const { username, address, province, postalcode } = useSelector(state => state.Auth)
    const dispatch = useDispatch()
    const [dataCheckoutDetail, setDataCheckoutDetail] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)


    console.log(props.match.params);

    useEffect(() => {
        const idusers = localStorage.getItem('droneme')
        const idtransactions = props.match.params.idtransactions
        Axios.get(`${apiurl}/users/usergetcheckoutdetail/${idusers}/${idtransactions}`)
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

    const [dataReceiver, setDataReceiver] = useState([])

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

    // //============================== FUNCTION ADD UPLOAD PAYMENT ===========================================// //

    const [addPaymentImage, setAddPaymentImage] = useState({
        idtransactions: 0,
        paymentimage: undefined,
        paymentimagename: '',
    })

    const { paymentimage } = addPaymentImage

    const onAddPaymentImage = (event) => {
        // console.log(document.getElementById('addImagePost').files[0])
        console.log(event.target)
        console.log(event.target.files[0])
        var file = event.target.files[0]
        if (file) {
            setAddPaymentImage({ ...addPaymentImage, paymentimagename: file.name, paymentimage: event.target.files[0] })
        } else {
            setAddPaymentImage({ ...addPaymentImage, paymentimagename: 'Select Image...', paymentimage: undefined })
        }
    }

    const onPayClick = () => { // //function add product
        const idusers = localStorage.getItem('droneme')
        var formdata = new FormData()
        var Headers = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        const data = {
            idusers: idusers,
            paymentstatus: 'Payment Uploaded',
            idtransactions: props.match.params.idtransactions,
        }

        formdata.append('image', paymentimage)
        formdata.append('data', JSON.stringify(data))

        Axios.post(`${apiurl}/users/addpaymentimage`, formdata, Headers)
            .then(res => {
                console.log(res.data.paymentimage)
                if (res.data.result) {
                    Swal.fire({
                        title: 'Your Payment Image Has Been Uploaded!',
                        text: `Please wait for verification`,
                        icon: 'success',
                        background: '#21272C',
                        color: '#ddd'
                    })
                    // .then(() => {
                    //     return <Link to='/orders' />
                    // })
                    // .catch((error) => {
                    //     console.log(error);
                    // })
                }
            })
            .catch(err => {
                console.log(err)
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
                        <p className="header-title" style={{ marginRight: '130px', fontSize: '17px', color: 'red' }}>
                            Note: This an address that you have submitted when starting your registration.<br />
                            To change, please head on to the <a href='/useredit'>Edit Profile Tab</a> before making your payment.
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
                            Upload Your Payment Here :
                        </p>
                        <br /><br />
                        <div className="overlay-box col-md-4" style={{ marginLeft: '280px' }}>
                            <input type="file" onChange={onAddPaymentImage} name='paymentimage' />
                        </div>
                    </div>
                </div>

                <br /><br />

                <div className="form-action">
                    <a style={{ marginLeft: '400px', padding: 20 }} href="/orders" className="btn-danger">Return</a>
                    <a style={{ marginLeft: '25px', padding: 20 }} onClick={onPayClick} className="btn-primary">PAY !</a>
                </div>

                <br /><br />
            </div>
        </div>
    );
}

export default OrderDetail