import React, { Component } from 'react';
import AdminSideLeft from '../components/adminsideleft';
import Axios from 'axios'
import { apiurl } from '../support/apiurl'
import { Redirect } from 'react-router-dom';
import { AddProductSuccess } from '../redux/actions'
import { connect } from 'react-redux';

class AdminAddProducts extends Component {
    state = {
        addImageFile: null,
        producttypes: [],
        idproducttypes: 0
    }

    componentDidMount() {
        Axios.get(`${apiurl}/products/getproducttypes`)
            .then(res => {
                this.setState({ producttypes: res.data })
                console.log(this.state.producttypes);
            })
            .catch(err => {
                console.log(err)
            })
    }

    renderSelectTypes = () => {
        var producttypes = this.state.producttypes
        console.log(this.state.producttypes);
        return producttypes.map((val, index) => {
            return <option value={val.idproducttypes} key={index}>{val.producttypes}</option>
        })
    }

    onAddClick = () => {
        var formdata = new FormData()
        var productname = this.refs.productname.value
        var productprice = this.refs.productprice.value
        var productstock = this.refs.productstock.value
        var productdescription = this.refs.productdescription.value
        var productimage = this.state.addImageFile
        var idproducttypes = this.refs.producttypes.value
        var dataproducts = {
            productname,
            productprice,
            productstock,
            productdescription,
            idproducttypes
        }
        console.log(dataproducts);
        console.log(productimage);

        var Headers = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        formdata.append('image', productimage)
        formdata.append('products', JSON.stringify(dataproducts))

        Axios.post(`${apiurl}/products/addproducts`, formdata, Headers)
            .then(res => {
                console.log(res.data.dataproducts)
                this.setState({ modaladd: false })
                this.props.AddProductSuccess()
            })
            .catch(err => {
                console.log(err)
            })
    }

    onAddImage = (event) => {
        console.log(event.target.files[0]);
        var file = event.target.files[0]
        if (file) {
            this.setState({ addImageFile: event.target.files[0] })
        } else {
        }
    }

    onChangeTypes = (e) => {
        const { value } = e.target
        this.setState({ idproducttypes: value })
    }

    render() {
        if (this.props.addproduct) {
            return <Redirect to='/admindroneproducts' />
        }
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
                                Add New Product
                            </p>
                        </div>
                    </div>

                    <div className="row report-group">
                        <div className="col-md-12">
                            <div className="item-big-report col-md-12">
                                <div className="row">

                                    <div className="overlay-box col-md-4">
                                        <input onChange={this.onAddImage} type="file" id="myfile" name="myfile" />
                                    </div>
                                    <div style={{ paddingLeft: '30px' }} className="thumbnail-box col-md-4">
                                        <img className="thumbnail-products" src="https://cdn10.bigcommerce.com/s-xxhdb6xi/product_images/uploaded_images/p4.png" alt="ProductImage" />
                                    </div>

                                    <div className="col-md-5">
                                        <form>
                                            <div className="form-group content-sign-in">
                                                <input type="text" className="form-control input-type-primary" ref='productname' placeholder="Product Name" />
                                            </div>

                                            <div className="form-group">
                                                <input type="text" className="form-control input-type-primary" ref='productprice' placeholder="Price (Rp)" />
                                            </div>

                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <input type="number" className="form-control input-type-primary" ref='productstock' placeholder="Stock" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <select className="form-control input-type-primary" ref='producttypes' placeholder="Product Type">
                                                            {this.renderSelectTypes()}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <textarea className="input-type-primary form-control" ref='productdescription' rows={3} defaultValue={""} placeholder="Description" />
                                            </div>

                                            <div style={{ marginBottom: '-40px', visibility: 'hidden' }} className="form-group content-sign-in">
                                                <input id="image_file" type="file" />
                                            </div>

                                            <div className="form-action">
                                                <div onClick={this.onAddClick} style={{ paddingLeft: '20px' }} type="submit" className="btn-small">Add</div>
                                                <div style={{ marginLeft: '10px' }} type="reset" className="btn-small">Cancel</div>
                                                <a style={{ marginLeft: '10px', paddingLeft: 19 }} href='/admindroneproducts' className="btn-small">Back</a>
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

const MapStateToProps = (state) => {
    return {
        addproduct: state.Auth.addproduct,
    };
}

export default connect(MapStateToProps, { AddProductSuccess })(AdminAddProducts);