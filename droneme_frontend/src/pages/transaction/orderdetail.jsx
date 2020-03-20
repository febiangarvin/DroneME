import React, { useEffect, useState } from 'react';
import Header from '../../components/header'
import NotFound from '../support/notfound'
import Axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { UserGetCheckout } from '../../redux/actions'
import { apiurl } from '../../support/apiurl'

const OrderDetail = () => {

    // //============================== FUNCTION READ ORDER DETAIL ================================================// //

    // const { datacart } = useSelector(state => state.HomeReducers)
    // const dispatch = useDispatch()
    // const [dataCheckout, setDataCheckout] = useState([])

    // const renderCart = () => {
    //     return datacart.map((val, index) => {
    //         // return console.log(val);
    //         return (
    //             <tr key={index}>
    //                 <td>{val.productname}</td>
    //                 <td>Rp{val.productprice}</td>
    //                 <td>{val.quantity}</td>
    //             </tr>
    //         )
    //     })
    // }

    // const renderTotalPrice = () => {
    //     return datacart.map((val, index) => {
    //         return (
    //             <tr key={index}>
    //                 <td>{val.totalproce}</td>
    //             </tr>
    //         )
    //     })
    // }

    // const renderReceiver = () => {
    //     return datacart.map((val, index) => {
    //         // return console.log(val);
    //         return (
    //             <tr key={index}>
    //                 Your Transaction ID : {val.iduniquetransactions}
    //             </tr>
    //             <tr key={index}>
    //                 Receiver Name : {val.receiver}
    //             </tr>
    //             <tr key={index}>
    //                 Address : {val.address}
    //             </tr>
    //             <tr key={index}>
    //                 Province : {val.province}
    //             </tr>
    //             <tr key={index}>
    //                 Postal Code : {val.postalcode}
    //             </tr>
    //         )
    //     })
    // }

    // //============================== FUNCTION OPEN MODAL UPLOAD PAYMENT ====================================// //

    // const [startPayment, setStartPayment] = useState({
    //     iduniquetransactions: 0,
    // })

    // const { iduniquetransactions } = startPayment

    // const [addImage, setAddImage] = useState({ // //array pertama menunjukan state dan kedua untuk memodifikasi state
    //     imageFileName: 'Add an image...',
    //     imageFile: undefined
    // })

    // const onAddImage = e => {
    //     console.log('e.target.files[0]', addImage);
    //     var file = e.target.files[0]
    //     if (file) {
    //         setAddDataProduct({ ...addDataProduct, productimagename: file.name, productimage: file })
    //     }
    //     else {
    //         setAddDataProduct({ ...addDataProduct, productimagename: 'Select Image', productimage: undefined })
    //     }
    // }

    // const onConfirmPayment = () => { // //function add product
    //     var formdata = new FormData()
    //     var dataproducts = { // //buat variable dari isi yang akan dilakukan post
    //         productname,
    //         productprice,
    //         idproducttypes,
    //         productstock,
    //         productdescription,
    //     }

    //     console.log(dataproducts);
    //     console.log(productimage);

    //     var Headers = {
    //         headers: {
    //             'Content-Type': 'multipart/form-data'
    //         }
    //     }
    //     formdata.append('image', productimage)
    //     formdata.append('products', JSON.stringify(dataproducts))

    //     // //melakukan post (url sesuai yang dibuat di product controller). Data yang dikirim berupa formData dan headers
    //     Axios.post(`${apiurl}/products/addproducts`, formdata, Headers)
    //         .then(res => { // //jika berhasil, mengirimkan response
    //             console.log(res.data.dataproducts)
    //             dispatch({ type: 'ADD_PRODUCT_SUCCESS' }) // //dengan dispatch, buat actions yang case nya dibuat di reducers
    //         })
    //         .catch(err => { // //jika error, mengirimkan error
    //             console.log(err)
    //         })
    // }

    // const [paymentModal, setPaymentModal] = useState({
    //     modalPayment: false,
    //     indexTransaction: -1
    // })

    // const { indexTransaction, modalPayment } = paymentModal

    // const onModalOpen = (index) => {
    //     setStartPayment(startPayment[index])
    //     setPaymentModal({ ...paymentModal, modalPayment: true, indexTransaction: index });
    // }

    // const toggleModal = () => setPaymentModal({ ...paymentModal, modalPayment: !modalPayment })

    // const renderModalPayment = () => {
    //     return startPayment.map((val, index) => {
    //         return (
    //             <Modal isOpen={modalPayment} fade={false} key={index} toggle={toggleModal}>
    //                 <ModalHeader>
    //                     <center>
    //                         Pay the required fee via BCA : 54672871 (a/n DroneME)
    //                     </center>
    //                 </ModalHeader>
    //                 <ModalBody>
    //                     <input type="file" className="form-control input-type-primary" style={{ padding: 2 }} onChange={onEditImageFileChange} name='productimage' />
    //                 </ModalBody>
    //                 <ModalFooter>
    //                     <Button color="success" onClick={onConfirmPayment}>Confirm</Button>
    //                     <Button color="secondary" onClick={toggleModal}>Close</Button>
    //                 </ModalFooter>
    //             </Modal>
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
                                    {/* {renderCart()} */}
                                    <tr>
                                        <td>DJI Phantom 4 Pro</td>
                                        <td>Rp 20.000.000</td>
                                        <td>1</td>
                                    </tr>
                                    <br /><br />
                                </tbody>
                                <tfooter style={{ fontSize: '20px', color: 'white' }}>
                                    {/* {renderTotalPrice()} */}
                                    <tr>
                                        Grand Total : Rp 20.000.000
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
                                <tbody style={{ fontSize: '20px', color: 'white' }}>
                                    {/* {renderReceiver()} */}
                                    <tr>
                                        Your Transaction ID : 1233456665
                                    </tr>
                                    <tr>
                                        Receiver Name : Febian
                                    </tr>
                                    <tr>
                                        Address : Cirendeu CirendeuCirendeu Cirendeu Cirendeu CirendeuCirendeu
                                    </tr>
                                    <tr>
                                        Province : Banten
                                    </tr>
                                    <tr>
                                        Postal Code : 16553
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <br />
                        <div className="form-action" style={{ marginLeft: '425px' }}>
                            {/* <button className='btn btn-danger mr-1 ml-1' onClick={() => onCancelCheckout(index)}>CANCEL</button> */}
                            <a href='/orders' className='btn btn-danger mr-2 ml-2'>BACK</a>
                            <a href='/orders' className='btn btn-success mr-2 ml-2'>PAY</a>
                        </div>
                        <br /><br />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default OrderDetail