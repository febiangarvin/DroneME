import React, { useEffect, useState } from 'react';
import AdminSideLeft from '../../components/adminsideleft';
import NotFound from '../support/notfound'
import Axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { apiurl } from '../../support/apiurl'

const AdminDashboard = () => {

    // //============================== FUNCTION READ USERS ===================================================// //

    const [dataCheckout, setDataCheckout] = useState([])

    useEffect(() => {
        Axios.get(`${apiurl}/admin/admingetapprovedpayment`)
            .then((res) => {
                setDataCheckout(res.data.result)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const renderCheckout = () => {
        return dataCheckout.map((val, index) => {
            return (
                <tr key={index}>
                    <td>{val.idtransactions}</td>
                    <td>{val.username}</td>
                    <td>Rp {val.totalprice}</td>
                    <td>
                        <a href={`/adminsalesdetail/${val.idtransactions}`} className="btn-primary ml-3">Details</a>
                    </td>
                    <td>{val.paymentstatus}</td>
                </tr>
            )
        })
    }

    const [getUser, setGetUser] = useState([])
    const [getDroneProduct, setGetDroneProduct] = useState([])
    const [getDroneAccessoriesProduct, setGetDroneAccessoriesProduct] = useState([])
    const [getAccessoriesProduct, setGetAccessoriesProduct] = useState([])

    useEffect(() => {
        Axios.get(`${apiurl}/admin/admingetreport`)
            .then((res) => {
                // setDataCheckout(res.data.result)
                console.log(res.data);
                setGetUser([...getUser, res.data.usercount])
                setGetDroneProduct([...getDroneProduct, res.data.totaldroneproducts])
                setGetDroneAccessoriesProduct([...getDroneAccessoriesProduct, res.data.totaldroneaccessoriesproducts])
                setGetAccessoriesProduct([...getAccessoriesProduct, res.data.totalaccessoriesproducts])
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const [getTotalIncome, setGetTotalIncome] = useState(0)
    const [yearIncome, setYearIncome] = useState('0')
    const [monthIncome, setMonthIncome] = useState('0')

    useEffect(() => { // //component did mount
        Axios.post(`${apiurl}/admin/admingettotalincome`)
            .then((res) => {
                setGetTotalIncome(res.data.totalincome)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => { // //component update mount
        Axios.post(`${apiurl}/admin/admingettotalincome`, { year: yearIncome, month: monthIncome })
            .then((res) => {
                if (res.data.totalincome < 0) {
                    setGetTotalIncome(0)
                }
                console.log(res.data);
                setGetTotalIncome(res.data.totalincome)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [yearIncome, monthIncome]) // //state update

    // did, update, unwillmount
    // did = terjadi ketika pertama sebuah page dibuka (render), did akan berjalan 1 kali
    // update = akan melakukan aksi berdasarkan sebuah state yg berubah

    const [getTotalProduct, setGetTotalProduct] = useState(0)
    const [yearTotalProduct, setYearTotalProduct] = useState('0')
    const [monthTotalProduct, setMonthTotalProduct] = useState('0')

    useEffect(() => {
        Axios.post(`${apiurl}/admin/admingettotalsoldproducts`)
            .then((res) => {
                setGetTotalProduct(res.data.soldproducts)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        Axios.post(`${apiurl}/admin/admingettotalsoldproducts`, { year: yearTotalProduct, month: monthTotalProduct })
            .then((res) => {
                setGetTotalProduct(res.data.soldproducts)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [yearTotalProduct, monthTotalProduct])

    // //============================== RENDER AKHIR ==========================================================// //

    return (
        <div>
            <AdminSideLeft />

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
                                        {getUser}
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
                                        TOTAL INCOME
                                    </p>
                                    <div className="row">
                                        {/* onChange disini berguna untuk mengambil target value yang dibuat di dalam option*/}
                                        <select className="form-control" style={{ background: 'black', color: 'green', marginLeft: '30px', padding: '5px' }} onChange={(e) => { setYearIncome(e.target.value) }}>
                                            <option value='2020'>Choose Year:</option>
                                            <option value='2020'>2020</option>
                                            <option value='2021'>2021</option>
                                            <option value='2022'>2022</option>
                                            <option value='2023'>2023</option>
                                            <option value='2024'>2024</option>
                                            <option value='2025'>2025</option>
                                        </select>
                                        <select className="form-control" style={{ background: 'black', color: 'green', marginLeft: '30px', padding: '5px' }} onChange={(e) => { setMonthIncome(e.target.value) }}>
                                            <option value='1'>Choose Month:</option>
                                            <option value='1'>January</option>
                                            <option value='2'>February</option>
                                            <option value='3'>March</option>
                                            <option value='4'>April</option>
                                            <option value='5'>May</option>
                                            <option value='6'>June</option>
                                            <option value='7'>July</option>
                                            <option value='8'>August</option>
                                            <option value='9'>September</option>
                                            <option value='10'>October</option>
                                            <option value='11'>November</option>
                                            <option value='12'>Desember</option>
                                        </select>
                                    </div>
                                    <p className="value-item">
                                        Rp {getTotalIncome}
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
                                    <div className="row">
                                        <select className="form-control" style={{ background: 'black', color: 'green', marginLeft: '30px', padding: '5px' }} onChange={(e) => { setYearTotalProduct(e.target.value) }}>
                                            <option value='2020'>Choose Year:</option>
                                            <option value='2020'>2020</option>
                                            <option value='2021'>2021</option>
                                            <option value='2022'>2022</option>
                                            <option value='2023'>2023</option>
                                            <option value='2024'>2024</option>
                                            <option value='2025'>2025</option>
                                        </select>
                                        <select className="form-control" style={{ background: 'black', color: 'green', marginLeft: '30px', padding: '5px' }} onChange={(e) => { setMonthTotalProduct(e.target.value) }}>
                                            <option value='1'>Choose Month:</option>
                                            <option value='1'>January</option>
                                            <option value='2'>February</option>
                                            <option value='3'>March</option>
                                            <option value='4'>April</option>
                                            <option value='5'>May</option>
                                            <option value='6'>June</option>
                                            <option value='7'>July</option>
                                            <option value='8'>August</option>
                                            <option value='9'>September</option>
                                            <option value='10'>October</option>
                                            <option value='11'>November</option>
                                            <option value='12'>Desember</option>
                                        </select>
                                    </div>
                                    <p className="value-item">
                                        {getTotalProduct}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row report-group">
                    <div className="column col-md-4">
                        <div className="item-report col-md-12">
                            <div className="row">
                                <div className="content col-md-12">
                                    <p className="title-item">
                                        DRONE PRODUCTS
                                    </p>
                                    <p className="value-item">
                                        {getDroneProduct}
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
                                        DRONE ACCESSORIES
                                    </p>
                                    <p className="value-item">
                                        {getDroneAccessoriesProduct}
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
                                        ACCESSORIES
                                    </p>
                                    <p className="value-item">
                                        {getAccessoriesProduct}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br /><br />

                <div className="header row">
                    <div className="col-md-12">
                        <p className="header-title">
                            Recent Transactions :
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
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderCheckout()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;