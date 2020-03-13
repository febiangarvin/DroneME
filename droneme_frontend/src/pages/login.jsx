import React, { Component } from 'react';
import LoginComp from '../components/support/img/icons/logincomp.png'
import Logo from '../components/support/img/icons/logo.png'
import { LoginThunk } from '../redux/actions'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

class Login extends Component {
    state = {}

    btnlogin = () => {
        var username = this.refs.username.value
        console.log(username);
        var password = this.refs.password.value
        console.log(password);
        this.props.LoginThunk(username, password)
    }

    render() {
        if (this.props.AuthLog) {
            return <Redirect to={'/'} />
        }

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
                                    <img className="icon-header" src={LoginComp} alt="" height={276} />
                                </div>
                                <div className="col-md-4">
                                    <p className="title-form">
                                        Sign In
                                    </p>
                                    <form>
                                        <div className="form-group content-sign-in">
                                            <label className="label-sign-in" htmlFor="exampleInputEmail1">Username</label>
                                            <input type="text" className="input-sign-in" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username" ref='username' />
                                        </div>
                                        <div className="form-group">
                                            <label className="label-sign-in" htmlFor="exampleInputPassword1">Password</label>
                                            <input type="password" className="input-sign-in" id="exampleInputPassword1" placeholder="Password" ref='password' />
                                        </div>
                                        <div onClick={this.btnlogin} className="btn-small">Sign In</div>
                                    </form>
                                    <p className="subtitle-form">
                                        <br />
                                        <a href='/Forgotpassword' style={{ fontSize: 12, fontWeight: 500 }}>Forgot Password?</a>
                                        <br /><br />
                                        <a href='/Register' style={{ fontSize: 19, fontWeight: 500 }}>Click here to Register</a>
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
}

const MapStateToProps = (state) => {
    return {
        AuthLog: state.Auth.login,
        Auth: state.Auth
    }
}

export default connect(MapStateToProps, { LoginThunk })(Login);