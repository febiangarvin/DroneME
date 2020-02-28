import React, { Component } from 'react';
import AdminSideLeft from '../components/adminsideleft';

class AdminManageProducts extends Component {
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
                                Product Name
                            </p>
                        </div>
                    </div>

                    <div className="row report-group">
                        <div className="col-md-12">
                            <div className="item-big-report col-md-12">
                                <div className="row">

                                    <div className="overlay-box col-md-4">
                                        <a href="#" id="open_file" className="btn-medium">Replace Image</a>
                                    </div>
                                    <div style={{ paddingLeft: '30px' }} className="thumbnail-box col-md-4">
                                        <img className="thumbnail-products" src="https://cdn10.bigcommerce.com/s-xxhdb6xi/product_images/uploaded_images/p4.png" alt="ProductImage" />
                                    </div>

                                    <div className="col-md-5">
                                        <form>
                                            <div className="form-group content-sign-in">
                                                <input type="text" className="form-control input-type-primary" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Product Name" />
                                            </div>

                                            <div className="form-group">
                                                <input type="text" className="form-control input-type-primary" id="exampleInputPassword1" placeholder="Price (Rp)" />
                                            </div>

                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <input type="number" className="form-control input-type-primary" id="exampleInputPassword1" placeholder="Stock" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <select className="form-control input-type-primary">
                                                            <option value='1'>Drone</option>
                                                            <option value='2'>Drone Accessories</option>
                                                            <option value='3'>Accessories</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <textarea className="input-type-primary form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} placeholder="Description"/>
                                            </div>

                                            <div style={{ marginBottom: '-40px', visibility: 'hidden' }} className="form-group content-sign-in">
                                                <input id="image_file" type="file" />
                                            </div>

                                            <div className="form-action">
                                                <div type="submit" className="btn-small">Update</div>
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

export default AdminManageProducts;