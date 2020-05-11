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
    const dispatch = useDispatch()
    const [dataCheckoutDetail, setDataCheckoutDetail] = useState([]) // //state untuk mengambil data product per idtransactions

    useEffect(() => {
        const idusers = localStorage.getItem('droneme') // //mengirim variable berupa idusers yang diambil dari localstorage
        const idtransactions = props.match.params.idtransactions // //mengirim variable yang berisi properti spesifik dengan parameter id, yaitu idtransactions saja
        Axios.get(`${apiurl}/users/usergetunpaidcheckoutdetail/${idusers}/${idtransactions}`)
            .then((res) => {
                setDataCheckoutDetail(res.data.result)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const renderCheckoutDetail = () => { // //me-render tampilan product dengan value data yang akan tampil
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

    const [totalPrice, setTotalPrice] = useState(0) // //state untuk menentukan total harga (dengan state awal angka 0)

    useEffect(() => { // //gunakan useEffect dengan jenis update
        let total = 0 // //variable total awal dengan angka 0
        for (let i = 0; i < dataCheckoutDetail.length; i++) {
            // //lakukan looping berdasarkan length cart. Dimana total akan terus bertambah dengan hasil perkalian productprice dan quantity (sesuaikan dengan banyaknya product).
            total += dataCheckoutDetail[i].productprice * dataCheckoutDetail[i].quantity
        }
        setTotalPrice(total)
    }, [dataCheckoutDetail]) // //update untuk state dataCheckoutDetail

    const [dataReceiver, setDataReceiver] = useState([])
    const { username, address, province, postalcode } = useSelector(state => state.Auth) // //mengambil state dari reducers

    const renderReceiver = () => {
        return ( // //me-render tampilan receiver dengan value data user
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
        // //destructuring state untuk menambah paymentImage, beserta data spesifik yang akan dikirim
        idtransactions: 0,
        paymentimage: undefined,
        paymentimagename: '',
    })

    const [redirectPage, setRedirectPage] = useState(false)

    const { paymentimage } = addPaymentImage // //variable object dari state awal

    const onAddPaymentImage = (event) => { // //buat function untuk add paymentImage (onClick) dengan parameter event
        console.log(event.target)
        console.log(event.target.files[0])
        var file = event.target.files[0] // //buat variable yang berisi target dari files yang dikirim
        if (file) { // //jika file terdeteksi
            setAddPaymentImage({ ...addPaymentImage, paymentimagename: file.name, paymentimage: event.target.files[0] })
        } else { // //jika tidak ada file terdeteksi
            setAddPaymentImage({ ...addPaymentImage, paymentimagename: 'Select Image...', paymentimage: undefined })
        }
    }

    const onPayClick = () => { // //function eksekusi pembayaran (onClick)
        if (paymentimage === undefined) {
            alert('Please Upload Payment Image')
        }
        else {
            const idusers = localStorage.getItem('droneme') // //mengirim variable berupa idusers yang diambil dari localstorage
            var formdata = new FormData() // //variable formdata untuk mengirim image
            var Headers = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            const data = { // //variable data yang akan dikirim
                idusers: idusers,
                paymentstatus: 'Payment Uploaded',
                idtransactions: props.match.params.idtransactions,
            }

            formdata.append('image', paymentimage) // //dengan append, kita mengirim formdata yang berupa image dengan data paymentImage
            formdata.append('data', JSON.stringify(data)) // //dengan append, kita mengirim formdata yang berupa data yang telah dilakukan method stringify

            Axios.post(`${apiurl}/users/addpaymentimage`, formdata, Headers) // //melakukan post dengan 2 variable
                .then(res => {
                    setRedirectPage(true)
                    console.log(res.data.paymentimage)
                    // .then(() => {
                    // if (res.data.result) { // //jika ada result
                    // Swal.fire({
                    //     title: 'Your Payment Image Has Been Uploaded!',
                    //     text: `Please wait for verification`,
                    //     icon: 'success',
                    //     background: '#21272C',
                    //     color: '#ddd'
                    // })
                    // return <Redirect to='/orders' />
                    // }
                    // })
                    // .catch((error) => {
                    //     console.log(error);
                    // })
                })
                .catch(err => {
                    console.log(err)
                })
        }
        // return <Redirect to='/orders' />
    }

    // //============================== RENDER AKHIR ==========================================================// //

    if (redirectPage === true) {
        return (<Redirect to='/paidorders' />)
    }
    else {
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
                            {/* <p className="header-title" style={{ marginRight: '130px', fontSize: '17px', color: 'red' }}>
                                Note: This an address that you have submitted when starting your registration.<br />
                            To change, please head on to the <a href='/useredit'>Edit Profile Tab</a> before making your payment.
                        </p> */}
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
}

export default OrderDetail