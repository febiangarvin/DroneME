import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import Axios from "axios";
import { apiurl } from "../../support/apiurl";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import { ResetPassAction } from "../../redux/actions";

import Confidential from '../../components/support/img/icons/confidential.png'
import Profile from '../../components/support/img/icons/profile.png'
import Logo from '../../components/support/img/icons/logo.png'

class UserEdit extends Component {
    state = {}

    onEditUser = () => {
        var oldpassword = this.refs.oldpassword.value // //variable untuk nantinya mengambil username
        var newpassword = this.refs.newpassword.value // //variable untuk nantinya mengambil password
        var password = this.refs.confirmpassword.value // //variable untuk mengambil variable password pengulangan
        var updatepassword = {
            username: this.props.usernamelog,
            password,
            role: this.props.role
        }; // //variable dengan isi parameter variable sebelumnya
        if (oldpassword === "" || newpassword === "" || password === "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password should not be empty!"
            });
        }
        else if (oldpassword === newpassword) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Your new password should be a new one"
            });
        }
        else if (oldpassword !== this.props.passuser) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Wrong password"
            });
        }
        else if (newpassword !== password) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Your new password does not match"
            });
        }
        else {
            Axios.put(`${apiurl}/users/updatepassword/${this.props.userid}`, updatepassword)
                .then(res => {
                    Swal.fire({
                        title: "Confirm update?",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        cancelButtonText: "No",
                        confirmButtonText: "Yes"
                    }).then(result => {
                        if (result.value) {
                            this.props.ResetPassAction(res.data);
                            Swal.fire({
                                icon: "success",
                                title: "Password has been updated!",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        }
    };

    render() {
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
                                        <div onClick={this.onEditUser} className="btn-small">Update</div>
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
                                        <div onClick={this.onEditUser} className="btn-small">Update</div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const MapstateToprops = state => {
    return {
        usernamelog: state.Auth.username,
        userlog: state.Auth.login,
        userid: state.Auth.id,
        passuser: state.Auth.password,
        role: state.Auth.role
    };
};

export default connect(MapstateToprops, { ResetPassAction })(UserEdit);