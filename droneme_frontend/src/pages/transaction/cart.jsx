import React, { useEffect, useState } from 'react';
import Header from '../../components/header'
import NotFound from '../support/notfound'
import Axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { UserGetCart } from '../../redux/actions'
import { apiurl } from '../../support/apiurl'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

const Cart = () => {

    // //============================== FUNCTION READ CART ====================================================// //

    const { datacart } = useSelector(state => state.HomeReducers)
    const { username, address, province, postalcode } = useSelector(state => state.Auth)
    const dispatch = useDispatch()
    const [dataCart, setDataCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const renderCart = () => {
        return datacart.map((val, index) => {
            console.log(typeof val.productprice);
            // return console.log(val);
            return (
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

    const [dataReceiver, setDataReceiver] = useState([])

    useEffect(() => {
        let total = 0
        for (let i = 0; i < datacart.length; i++) {
            total += datacart[i].productprice * datacart[i].quantity
        }
        setTotalPrice(total)
    }, [datacart])

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

    // //============================== FUNCTION ADD PRODUCT ==================================================// //

    const [addToCheckout, setAddToCheckout] = useState(datacart)

    const addCartData = e => {
        const { name, value } = e.target
        setAddToCheckout([...addToCheckout, { [name]: value }])
    }
    console.log(addToCheckout);
    const addDataToCheckout = () => {
        Axios.put(`${apiurl}/users/addcheckout`, dataCart)
            .then(() => {
                return <Link to='/usertransaction/checkout' />
            })
    }

    // //============================== FUNCTION DELETE CART ===================================================// //

    const onDeleteDataCart = (index) => {
        var id = datacart[index].idtransactiondetails
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
                        Axios.delete(`${apiurl}/users/deletecart/${id}`)
                            .then(() => {
                                dispatch(UserGetCart())
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
                        <p className="header-title" style={{ marginRight: '130px', fontSize: '17px', color: 'red' }}>
                            Note: This an address that you have submitted when starting your registration.<br />
                            To change, please head on to the <a href='/useredit'>Edit Profile Tab</a> before checking out.
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

                <div className="form-action">
                    <a style={{ marginLeft: '375px', paddingLeft: 20 }} href="/droneproducts" className="btn-medium">Return</a>
                    <a style={{ marginLeft: '25px', paddingLeft: 20 }} onClick={addDataToCheckout} className="btn-medium">Checkout</a>
                </div>

                <br /><br />
            </div>

        </div>
    );
}

export default Cart;