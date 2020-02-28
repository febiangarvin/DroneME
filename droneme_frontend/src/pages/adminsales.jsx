import React, { Component } from 'react';
import AdminSideLeft from '../components/adminsideleft';

class AdminSales extends Component {
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
                                Product Sales
                            </p>
                        </div>
                    </div>
                    <div className="row report-group">
                        <div className="col-md-12">
                            <div className="item-big-report col-md-12">
                                <table className="table-tiketsaya table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">Transaction Unique ID</th>
                                            <th scope="col">Username</th>
                                            <th scope="col">Total Price</th>
                                            <th scope="col">Details</th>
                                            <th scope="col">Payment Status</th>
                                            <th scope="col">Shipment Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>35467890</td>
                                            <td>Mark Balley</td>
                                            <td>Rp10.000.000</td>
                                            <td>
                                                <a href="/adminsalesdetail" className="btn-small">Details</a>
                                            </td>
                                            <td>Paid</td>
                                            <td>
                                                <label className="switch">
                                                    <input type="checkbox" />
                                                    <span className="slider round" />
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>35467890</td>
                                            <td>Mark Balley</td>
                                            <td>Rp10.000.000</td>
                                            <td>
                                                <a href="/adminsalesdetail" className="btn-small">Details</a>
                                            </td>
                                            <td>Paid</td>
                                            <td>
                                                <label className="switch">
                                                    <input type="checkbox" />
                                                    <span className="slider round" />
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>35467890</td>
                                            <td>Mark Balley</td>
                                            <td>Rp10.000.000</td>
                                            <td>
                                                <a href="/adminsalesdetail" className="btn-small">Details</a>
                                            </td>
                                            <td>Paid</td>
                                            <td>
                                                <label className="switch">
                                                    <input type="checkbox" />
                                                    <span className="slider round" />
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>35467890</td>
                                            <td>Mark Balley</td>
                                            <td>Rp10.000.000</td>
                                            <td>
                                                <a href="/adminsalesdetail" className="btn-small">Details</a>
                                            </td>
                                            <td>Waiting for Payment</td>
                                            <td>
                                                <label className="switch">
                                                    <input type="checkbox" />
                                                    <span className="slider round" />
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>35467890</td>
                                            <td>Mark Balley</td>
                                            <td>Rp10.000.000</td>
                                            <td>
                                                <a href="/adminsalesdetail" className="btn-small">Details</a>
                                            </td>
                                            <td>Waiting for Payment</td>
                                            <td>
                                                <label className="switch">
                                                    <input type="checkbox" />
                                                    <span className="slider round" />
                                                </label>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminSales;