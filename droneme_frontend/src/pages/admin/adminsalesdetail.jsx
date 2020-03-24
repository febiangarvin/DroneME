import React, { Component } from 'react';
import AdminSideLeft from '../../components/adminsideleft';
import NotFound from '../support/notfound'

const AdminSalesDetail = (props) => {

    // //============================== FUNCTION READ ORDER DETAIL ================================================// //

    const { username, address, province, postalcode } = useSelector(state => state.Auth)
    const [dataCheckoutDetail, setDataCheckoutDetail] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const idtransactions = props.match.params.idtransactions
        Axios.get(`${apiurl}/users/usergetcheckoutdetail/${idusers}/${idtransactions}`)
            .then((res) => {
                setDataCheckoutDetail(res.data.result)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const renderCheckoutDetail = () => {
        return dataCheckoutDetail.map((val, index) => {
            return (
                <tr key={index}>
                    <td>{val.productname}</td>
                    <td>Rp {val.productprice}</td>
                    <td>{val.quantity}</td>
                </tr>
            )
        })
    }

    const [dataReceiver, setDataReceiver] = useState([])

    useEffect(() => {
        let total = 0
        for (let i = 0; i < dataCheckoutDetail.length; i++) {
            total += dataCheckoutDetail[i].productprice * dataCheckoutDetail[i].quantity
        }
        setTotalPrice(total)
    }, [dataCheckoutDetail])

    const renderReceiver = () => {
        return (
            <tbody style={{ fontSize: '20px', color: 'white' }}>
                <tr>
                    Receiver Name : {username}
                </tr>
                <tr>
                    Address : {address}
                </tr>
                <tr>
                    Province : {province}
                </tr>
                <tr>
                    Postal Code : {postalcode}
                </tr>
            </tbody>
        )
    }

    // //============================== RENDER AKHIR ==========================================================// //

    return (
        <div>

            <AdminSideLeft />

            <link rel="stylesheet" type="text/css" href="css/bootstrap.css" />
            <link rel="stylesheet" type="text/css" href="css/style.css" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />

            <div className="main-content">
                <div className="header row">
                    <div className="col-md-12" style={{ marginLeft: -335 }}>
                        <p className="header-title">
                            Transaction Details
                            </p>
                    </div>
                    <div className="col-md-12" style={{ marginLeft: -100 }}>
                        <p className="sub-header-title" style={{ fontWeight: 'bolder' }}>
                            Unique ID : 35467890
                            </p>
                        <p className="sub-header-title">
                            Shipment To:
                            </p>
                        <p className="sub-header-title">
                            Bekasi
                            </p>
                    </div>
                </div>

                <div className="row report-group">
                    <div className="col-md-12">
                        <div className="item-big-report col-md-12">
                            <table className="table-tiketsaya table table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">Products</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Product Type</th>
                                        <th scope="col">Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Phantom 4</td>
                                        <td>Rp10.000.000</td>
                                        <td>Drone</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Phantom 4</td>
                                        <td>Rp10.000.000</td>
                                        <td>Drone</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Phantom 4</td>
                                        <td>Rp10.000.000</td>
                                        <td>Drone</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Phantom 4</td>
                                        <td>Rp10.000.000</td>
                                        <td>Drone</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <br />
                        <div className="form-action">
                            <a style={{ marginLeft: '450px', paddingLeft: 19 }} href="/adminsales" className="btn-small">Back</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AdminSalesDetail;