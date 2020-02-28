import React, { Component } from 'react';
import AdminSideLeft from '../components/adminsideleft';
import user1 from '../components/support/img/user_1.png'
import user2 from '../components/support/img/user_2.png'
import user3 from '../components/support/img/user_3.png'
import user4 from '../components/support/img/user_4.png'

class AdminDashboard extends Component {
    state = {}
    render() {
        return (
            <div>

                <AdminSideLeft />

                <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
                <link rel="stylesheet" type="text/css" href="css/style.css" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />

                <div className="main-content">

                    <div className="header row">
                        <div className="col-md-12">
                            <p className="header-title">
                                Admin's Dashboard
                            </p>
                        </div>
                    </div>

                    <div className="row report-group">

                        <div className="column col-md-4">
                            <div className="item-report col-md-12">
                                <div className="row">
                                    <div className="content col-md-12">
                                        <p className="title-item">
                                            USERS
                                        </p>
                                        <p className="value-item">
                                            20
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="column col-md-4">
                            <div className="item-report col-md-12">
                                <div className="row">
                                    <div className="content col-md-12">
                                        <p className="title-item">
                                            PRODUCTS
                                        </p>
                                        <p className="value-item">
                                            100
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="column col-md-4">
                            <div className="item-report col-md-12">
                                <div className="row">
                                    <div className="content col-md-12">
                                        <p className="title-item">
                                            PRODUCTS SOLD
                                        </p>
                                        <p className="value-item">
                                            12
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row report-group">

                        <div className="col-md-6">
                            <div className="item-big-report col-md-12">
                                <p className="title">
                                    DroneME USERS
                                </p>

                                <div className="user-item">
                                    <div className="user-picture">
                                        <img src={user1} alt="" />
                                    </div>
                                    <div className="user-info">
                                        <p className="title">
                                            Julia Fynn
                                        </p>
                                    </div>
                                </div>

                                <div className="user-item">
                                    <div className="user-picture">
                                        <img src={user2} alt="" />
                                    </div>
                                    <div className="user-info">
                                        <p className="title">
                                            Riku Nana
                                        </p>
                                    </div>
                                </div>

                                <div className="user-item">
                                    <div className="user-picture">
                                        <img src={user3} alt="" />
                                    </div>
                                    <div className="user-info">
                                        <p className="title">
                                            Chintya Vee
                                        </p>
                                    </div>
                                </div>

                                <div className="user-item">
                                    <div className="user-picture">
                                        <img src={user4} alt="" />
                                    </div>
                                    <div className="user-info">
                                        <p className="title">
                                            Agnes Monica
                                        </p>
                                    </div>
                                </div>

                                <div className="user-item">
                                    <div className="user-picture">
                                        <img src={user1} alt="" />
                                    </div>
                                    <div className="user-info">
                                        <p className="title">
                                            Julia Fynn
                                        </p>
                                    </div>
                                </div>

                                <div className="user-item">
                                    <div className="user-picture">
                                        <img src={user2} alt="" />
                                    </div>
                                    <div className="user-info">
                                        <p className="title">
                                            Riku Nana
                                        </p>
                                    </div>
                                </div>

                                <div className="user-item">
                                    <div className="user-picture">
                                        <img src={user3} alt="" />
                                    </div>
                                    <div className="user-info">
                                        <p className="title">
                                            Chintya Vee
                                        </p>
                                    </div>
                                </div>

                                <div className="user-item">
                                    <div className="user-picture">
                                        <img src={user4} alt="" />
                                    </div>
                                    <div className="user-info">
                                        <p className="title">
                                            Agnes Monica
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="item-big-report col-md-12">
                                <p className="title">
                                    DroneME USERS
                                </p>

                                <div className="user-item">
                                    <div className="user-picture">
                                        <img src={user1} alt="" />
                                    </div>
                                    <div className="user-info">
                                        <p className="title">
                                            Julia Fynn
                                        </p>
                                    </div>
                                </div>

                                <div className="user-item">
                                    <div className="user-picture">
                                        <img src={user2} alt="" />
                                    </div>
                                    <div className="user-info">
                                        <p className="title">
                                            Riku Nana
                                        </p>
                                    </div>
                                </div>

                                <div className="user-item">
                                    <div className="user-picture">
                                        <img src={user3} alt="" />
                                    </div>
                                    <div className="user-info">
                                        <p className="title">
                                            Chintya Vee
                                        </p>
                                    </div>
                                </div>

                                <div className="user-item">
                                    <div className="user-picture">
                                        <img src={user4} alt="" />
                                    </div>
                                    <div className="user-info">
                                        <p className="title">
                                            Sareta Selaby
                                        </p>
                                    </div>
                                </div>

                                <div className="user-item">
                                    <div className="user-picture">
                                        <img src={user1} alt="" />
                                    </div>
                                    <div className="user-info">
                                        <p className="title">
                                            Julia Fynn
                                        </p>
                                    </div>
                                </div>

                                <div className="user-item">
                                    <div className="user-picture">
                                        <img src={user2} alt="" />
                                    </div>
                                    <div className="user-info">
                                        <p className="title">
                                            Riku Nana
                                        </p>
                                    </div>
                                </div>

                                <div className="user-item">
                                    <div className="user-picture">
                                        <img src={user3} alt="" />
                                    </div>
                                    <div className="user-info">
                                        <p className="title">
                                            Chintya Vee
                                        </p>
                                    </div>
                                </div>

                                <div className="user-item">
                                    <div className="user-picture">
                                        <img src={user4} alt="" />
                                    </div>
                                    <div className="user-info">
                                        <p className="title">
                                            Agnes Monica
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>



                </div>
            </div>
        );
    }
}

export default AdminDashboard;