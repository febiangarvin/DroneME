import React, { Component } from 'react';
import AdminSideLeft from '../../components/adminsideleft';
import NotFound from '../support/notfound'

class AdminEdit extends Component {
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
                                Change Password
                            </p>
                        </div>
                    </div>

                    <div className="row report-group">
                        <div className="col-md-12">
                            <div className="item-big-report col-md-12">
                                <div className="row">

                                    <div className="col-md-5">
                                        <form>
                                            <div className="form-group content-sign-in">
                                                <input type="text" className="form-control input-type-primary" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Old Password" />
                                            </div>

                                            <div className="form-group">
                                                <input type="text" className="form-control input-type-primary" id="exampleInputPassword1" placeholder="New Password" />
                                            </div>

                                            <div className="form-group">
                                                <input type="text" className="form-control input-type-primary" id="exampleInputPassword1" placeholder="Confirm New Password" />
                                            </div>

                                            <div className="form-action">
                                                <div type="submit" className="btn-small">Update</div>
                                                <div style={{ marginLeft: '10px' }} type="reset" className="btn-small">Cancel</div>
                                            </div>

                                        </form>
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

export default AdminEdit;