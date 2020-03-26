import React, { useEffect, useState } from 'react';
import { Redirect } from "react-router-dom";
import Axios from "axios";
import { apiurl } from "../../support/apiurl";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import { ResetPassAction } from "../../redux/actions";
import { Link } from 'react-router-dom'

import Confidential from '../../components/support/img/icons/confidential.png'
import Profile from '../../components/support/img/icons/profile.png'
import Logo from '../../components/support/img/icons/logo.png'

const UserEdit = () => {

    // //============================== FUNCTION UPDATE =======================================================// //

    // const [editUserAddress, setEditUserAddress] = useState({
    //     idusers: 0,
    //     address: '',
    //     province: '',
    //     postalcode: '',
    // })

    // const editAddress = e => {
    //     const { name, value } = e.target
    //     setEditUserAddress({ ...editUserAddress, [name]: value })
    // }

    // const { idusers, address, province, postalcode } = editUserAddress

    // const onSaveEdit = () => {
    //     var data = {
    //         idusers,
    //         address,
    //         province,
    //         postalcode,
    //     }

    //     var id = data.idusers

    //     Axios.put(`${apiurl}/auth/updatepassword/${id}`) // //menaruh hasil edit ke axios (db)
    //         .then((res) => { // //jika axios berhasil
    //             console.log('res', res);
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }

    // //============================== RENDER AKHIR ==========================================================// //

    return (
        <div>
            <div className="login">

                <div className="row header_sign_in">
                    <div className="col-md-12">
                        <a href='/'><img className="logo-header" src={Logo} alt="" height={80} /></a>
                        <h2 className="title-header">droneME</h2>
                    </div>
                </div>

                <div className="row body_sign_in">
                    <div className="col-md-10 offset-md-1 form-sign-in">

                        <div className="row">
                            <div className="col-md-6 d-none d-sm-block">
                                <img className="icon-header" src={Confidential} alt="" height={276} />
                            </div>

                            <div className="col-md-4">
                                <p className="title-form">
                                    Change Password
                                </p>

                                <form>
                                    <div className="form-group">
                                        <label className="label-sign-in">Your Current Password</label>
                                        <input type="password" className="input-sign-in" ref='oldpassword' />
                                    </div>
                                    <div className="form-group">
                                        <label className="label-sign-in">Your New Password</label>
                                        <input type="password" className="input-sign-in" ref='newpassword' />
                                    </div>
                                    <div className="form-group">
                                        <label className="label-sign-in">Confirm Your New Password</label>
                                        <input type="password" className="input-sign-in" ref='confirmpassword' />
                                    </div>
                                    <div className="btn-small">Update</div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <br /><br />

                <div className="row body_sign_in">
                    <div className="col-md-10 offset-md-1 form-sign-in">

                        <div className="row">
                            <div className="col-md-6 d-none d-sm-block">
                                <img className="icon-header" src={Profile} alt="" height={276} />
                            </div>

                            <div className="col-md-4">
                                <p className="title-form">
                                    Edit Your Address
                                </p>

                                <form>
                                    <div className="form-group">
                                        <label className="label-sign-in">Address</label>
                                        <textarea type="text" className="input-sign-in" style={{ width: '300px', height: '100px' }} ref='address' />
                                    </div>
                                    <div className="form-group">
                                        <label className="label-sign-in">Province</label>
                                        <input type="text" className="input-sign-in" ref='province' />
                                    </div>
                                    <div className="form-group">
                                        <label className="label-sign-in">Postal Code</label>
                                        <input type="number" className="input-sign-in" ref='postalcode' />
                                    </div>
                                    <div className="btn-small">Update</div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserEdit;