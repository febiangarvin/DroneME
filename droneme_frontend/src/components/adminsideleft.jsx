import React, { Component } from 'react';
import Logo from '../components/support/img/icons/logo.png'

class AdminSideLeft extends Component {
    state = {}
    render() {
        return (
            <div>
                <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
                <link rel="stylesheet" type="text/css" href="css/style.css" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />

                <div className="side-left">
                    <div className="shortcut">
                        <div className='emblemapp'>
                            <a href='/'><img src={Logo} alt='logo' /></a>
                        </div>

                        <div className="menus">
                            <div className="item-menu">
                                <a href="/admindashboard">
                                    <p className="icon-item-menu">
                                        <i className="fas fa-desktop"></i>
                                    </p>
                                </a>
                            </div>

                            <div className="item-menu">
                                <a href="/adminsales">
                                    <p className="icon-item-menu">
                                        <i className="fas fa-cash-register"></i>
                                    </p>
                                </a>
                            </div>

                            <div className="item-menu">
                                <a href="/admindroneproducts">
                                    <p className="icon-item-menu">
                                        <i className="fas fa-robot"></i>
                                    </p>
                                </a>
                            </div>

                            <div className="item-menu">
                                <a href="/admincustomers">
                                    <p className="icon-item-menu">
                                        <i className="fas fa-user-astronaut"></i>
                                    </p>
                                </a>
                            </div>

                            <div className="item-menu">
                                <a href="/adminedit">
                                    <p className="icon-item-menu">
                                        <i className="fas fa-edit"></i>
                                    </p>
                                </a>
                            </div>

                            <div className="item-menu">
                                <a href="#">
                                    <p className="icon-item-menu">
                                        <i className="fas fa-power-off" />
                                    </p>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AdminSideLeft;