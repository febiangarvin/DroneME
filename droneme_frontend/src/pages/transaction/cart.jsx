import React, { useEffect, useState } from 'react';
import Header from '../../components/header'
import NotFound from '../support/notfound'
import Axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { UserGetCart } from '../../redux/actions'
import { apiurl } from '../../support/apiurl'
import Swal from 'sweetalert2'
import { Link, Redirect } from 'react-router-dom';

const Cart = () => {

    // //============================== FUNCTION READ CART ====================================================// //

    const redux = useSelector((state) => {
        return {
            roles: state.Auth.roles,
            username: state.Auth.username,
        }
    })

    const { datacart } = useSelector(state => state.HomeReducers) // //mengambil state dari reducers
    const dispatch = useDispatch() // //aktifkan dispatch (model hooks)
    const [dataCart, setDataCart] = useState([])

    const renderCart = () => {
        return datacart.map((val, index) => { // //me-return data berupa cart dengan melakukan mapping dengan parameter value dan index
            return ( // //me-render tampilan cart dengan value data yang akan tampil
                <tr key={index}>
                    <td>{val.productname}</td>
                    <td>Rp {val.productprice}</td>
                    <td>{val.quantity}</td>
                    <td>Rp {val.productprice * val.quantity}</td>
                    <td>
                        <button className='btn btn-danger mr-1 ml-1' onClick={() => onDeleteDataCart(index)}>DELETE</button>
                    </td>
                </tr>
            )
        })
    }

    const [totalPrice, setTotalPrice] = useState(0) // //state untuk menentukan total harga (dengan state awal angka 0)

    useEffect(() => { // //gunakan useEffect dengan jenis update
        let total = 0 // //variable total awal dengan angka 0
        for (let i = 0; i < datacart.length; i++) {
            // //lakukan looping berdasarkan length cart. Dimana total akan terus bertambah dengan hasil perkalian productprice dan quantity (sesuaikan dengan banyaknya product).
            total += datacart[i].productprice * datacart[i].quantity
        }
        setTotalPrice(total)
        console.log(totalPrice);
    }, [datacart]) // //update untuk state datacart

    const { username, address, province, postalcode } = useSelector(state => state.Auth) // //mengambil state dari reducers
    const [dataReceiver, setDataReceiver] = useState([])

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

    // //============================== FUNCTION ADD PRODUCT ==================================================// //

    const [addToCheckout, setAddToCheckout] = useState(datacart)

    const addDataToCheckout = () => { // //function eksekusi cart menjadi checkout
        if (totalPrice === 0) {
            alert('Cart is Empty')
        }
        else {
            const idusers = localStorage.getItem('droneme') // //mengirim variable berupa idusers yang diambil dari localstorage
            const datacheckout = { idusers: idusers, totalprice: parseInt(totalPrice) } // //mengirim variable yang berisi idusers serta totalpriceyang di render dari frontend
            Axios.post(`${apiurl}/users/addcheckout`, datacheckout)
                .then(() => {
                    console.log(totalPrice);
                    return <Link to='/orders' />
                })
        }
    }

    // //============================== FUNCTION DELETE CART ===================================================// //

    const onDeleteDataCart = (index) => { // //function delete per product di cart
        var id = datacart[index].idtransactiondetails // //variable id berdasrkan index per cart dari id transactiondetails (tabel)
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
                    text: 'An item in your cart has been deleted.',
                    icon: 'success',
                    background: '#21272C',
                    color: '#ddd'
                })
                    .then(() => {
                        Axios.delete(`${apiurl}/users/deletecart/${id}`) // //jika confirm, maka melakukan delete
                            .then(() => {
                                dispatch(UserGetCart()) // //setelahnya melakukan get lagi, dengan function yang telah dibuat di actions
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

    if (redux.username == 'admin') { // //proteksi admin (hanya admin yang bisa akses)
        return <NotFound />;
    }
    else {
        return (
            <div>
                <Header />

                <div className="main-content">
                    <div className="header row">
                        <div className="col-md-12">
                            <p className="header-title" style={{ marginRight: '150px' }}>
                                Cart
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
                                            <th scope="col">Total Price</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {renderCart()}
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

                    <div className="form-action">
                        <a style={{ marginLeft: '400px', padding: 20 }} href="/droneproducts" className="btn-warning">Return</a>
                        <a style={{ marginLeft: '25px', padding: 20 }} onClick={addDataToCheckout} href="/orders" className="btn-success">Checkout</a>
                    </div>

                    <br /><br />
                </div>

            </div>
        );
    }
}

export default Cart;