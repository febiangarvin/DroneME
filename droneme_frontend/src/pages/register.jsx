import React, { Component } from 'react';
import RegisterComp from '../components/support/img/icons/register.png'
import Logo from '../components/support/img/icons/logo.png'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { RegisterAction } from '../redux/actions'

class Register extends Component {
    state = {}

    // //============================== FUNCTION VARIABLES =============================================// //

    btnregister = () => {
        var username = this.refs.username.value;
        var email = this.refs.email.value;
        var password = this.refs.password.value;
        var confirmpassword = this.refs.confirmpassword.value
        this.props.RegisterAction({ username, email, password, confirmpassword });
    }

    // //=============================== RENDER ========================================================// //

    render() {
        if (this.props.register === false) {
            return (
                <div>
                    <div className="login">

                        <div className="row header_sign_in">
                            <div className="col-md-12">
                                <a href='/'><img className="logo-header" src={Logo} alt="" height={80} /></a>
                                <h2 className="title-header">droneME</h2>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-10 offset-md-1 form-sign-in">
                                <div className="row">
                                    <div className="col-md-6 d-none d-sm-block">
                                        <img className="icon-header" src={RegisterComp} alt="" height={276} />
                                    </div>
                                    <div className="col-md-4">
                                        <p className="title-form">
                                            Register
                                    </p>
                                        <form>
                                            <div className="form-group content-sign-in">
                                                <label className="label-sign-in" htmlFor="exampleInputEmail1">Username</label>
                                                <input ref='username' type="text" className="input-sign-in" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username" />
                                            </div>
                                            <div className="form-group content-sign-in">
                                                <label className="label-sign-in" htmlFor="exampleInputEmail1">Email</label>
                                                <input ref='email' type="email" className="input-sign-in" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />
                                            </div>
                                            <div className="form-group">
                                                <label className="label-sign-in" htmlFor="exampleInputPassword1">Password</label>
                                                <input ref='password' type="password" className="input-sign-in" id="exampleInputPassword1" placeholder="Enter Password" />
                                            </div>
                                            <div className="form-group">
                                                <label className="label-sign-in" htmlFor="exampleInputPassword1">Password Confirmation</label>
                                                <input ref='confirmpassword' type="password" className="input-sign-in" id="exampleInputPassword1" placeholder="Confirm Password" />
                                            </div>
                                            <div onClick={this.btnregister} className="btn-small">Sign Up</div>
                                        </form>
                                        <p className="subtitle-form">
                                            <br /><br />
                                            <a href='/Login' style={{ fontSize: 19, fontWeight: 500 }}>I'm already registered</a>
                                        </p>
                                        <p className="subtitle-form">
                                            <a href='/'>Back to Home</a>
                                        </p>
                                        <p>©2020 All rights reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            );
        }
        return <Redirect to='/Login' />
    }
}

const MapStateToProps = (state) => {
    return {
        register: state.Auth.register,
        loading: state.Auth.loading,
        error: state.Auth.error
    };
}

export default connect(MapStateToProps, { RegisterAction })(Register);