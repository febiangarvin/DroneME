import React, { useEffect, useState } from 'react';
import AdminSideLeft from '../components/adminsideleft';
import Axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { apiurl } from '../support/apiurl'
import { Redirect } from 'react-router-dom';
import NotFound from '../pages/notfound'

const AdminAddProducts = () => {

    // //============================== FUNCTION READ PRODUCT =================================================// //

    const redux = useSelector((state) => {
        return {
            roles: state.Auth.roles,
            username: state.Auth.username,
            addproductstatus: state.ProductReducers.addproductstatus
        }
    })
    const dispatch = useDispatch() // //untuk memanggil redux-thunk
    const [productTypes, setProductTypes] = useState([]) // //array pertama menunjukan state dan kedua untuk memodifikasi state

    const [loading, setLoading] = useState(true) // //membuat loading untuk me-render types

    useEffect(() => { // //gunakan function useEffect untuk get types
        Axios.get(`${apiurl}/products/getproducttypes`) // //sesuaikan url dengan yang sudah dibuat di productController
            .then((res) => {
                setProductTypes(res.data.result) // //jika berhasil, maka akan melakukan modifikasi state yang berupa response dari result data
                setLoading(false)
            })
            .catch((err) => { // //jika yang didapat adalah error, maka akan ada keterangan di console.log
                console.log(err)
            })
    }, [])

    const renderSelectTypes = () => { // //function render tampilan types
        return productTypes.map((val, index) => { // //melakukan map dari state product types
            return (
                // //buat option, dimana value nya berupa ID. Namun yang di render adalah string dari product types
                <option value={val.idproducttypes} key={index}>
                    {val.producttypes}
                </option>
            )
        })
    }

    // //============================== FUNCTION ADD PRODUCT ==================================================// //

    const [addDataProduct, setAddDataProduct] = useState({
        idproducttypes: 0,
        productname: '',
        productimage: null,
        productimagename: '',
        productprice: '',
        productstock: '',
        producttypes: '',
        productdescription: '',
    })

    const addProduct = e => {
        const { name, value } = e.target
        setAddDataProduct({ ...addDataProduct, [name]: value })
    }

    const { idproducttypes, productname, productimage, productprice, productstock, producttypes, productdescription } = addDataProduct

    const [addImage, setAddImage] = useState({ // //array pertama menunjukan state dan kedua untuk memodifikasi state
        imageFileName: 'Add an image...',
        imageFile: undefined
    })

    const onAddImage = e => {
        console.log('e.target.files[0]', addImage);
        var file = e.target.files[0]
        if (file) {
            setAddDataProduct({ ...addDataProduct, productimagename: file.name, productimage: file })
        }
        else {
            setAddDataProduct({ ...addDataProduct, productimagename: 'Select Image', productimage: undefined })
        }
    }

    const onChangeTypes = (e) => {
        const { idproducttypes, value } = e.target
        setProductTypes({ ...productTypes, [idproducttypes]: value })
    }

    const onAddClick = () => { // //function add product
        var formdata = new FormData()
        var dataproducts = { // //buat variable dari isi yang akan dilakukan post
            productname,
            productprice,
            idproducttypes,
            productstock,
            productdescription,
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

        // //melakukan post (url sesuai yang dibuat di product controller). Data yang dikirim berupa formData dan headers
        Axios.post(`${apiurl}/products/addproducts`, formdata, Headers)
            .then(res => { // //jika berhasil, mengirimkan response
                console.log(res.data.dataproducts)
                dispatch({ type: 'ADD_PRODUCT_SUCCESS' }) // //dengan dispatch, buat actions yang case nya dibuat di reducers
            })
            .catch(err => { // //jika error, mengirimkan error
                console.log(err)
            })
    }

    // //============================== RENDER AKHIR ==========================================================// //

    if (redux.roles === 1) { // //proteksi admin (hanya admin yang bisa akses)
        return <NotFound />;
    }
    if (loading) {
        return (
            <div>Loading...</div>
        )
    }
    if (redux.addproductstatus) {
        return <Redirect to='/admindroneproducts' />
    }

    return (
        <div>
            <AdminSideLeft />
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
                                    <input type="file" onChange={onAddImage} name='productimage' />
                                </div>
                                <div style={{ paddingLeft: '30px' }} className="thumbnail-box col-md-4">
                                    <img className="thumbnail-products" src="https://cdn10.bigcommerce.com/s-xxhdb6xi/product_images/uploaded_images/p4.png" alt="ProductImage" />
                                </div>

                                <div className="col-md-5">
                                    <form>
                                        <div className="form-group content-sign-in">
                                            <input type="text" className="form-control input-type-primary" onChange={addProduct} name='productname' defaultValue={productname} placeholder="Product Name" />
                                        </div>

                                        <div className="form-group">
                                            <input type="number" className="form-control input-type-primary" onChange={addProduct} name='productprice' defaultValue={productprice} placeholder="Price (Rp)" />
                                        </div>

                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <input type="number" className="form-control input-type-primary" onChange={addProduct} name='productstock' defaultValue={productstock} placeholder="Stock" min={1} />
                                                </div>
                                                <div className="col-md-6">
                                                    <select className="form-control input-type-primary" onChange={addProduct} name='idproducttypes'>
                                                        <option hidden>Product Type</option>
                                                        {productTypes && renderSelectTypes()}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <textarea type="text" className="form-control input-type-primary" onChange={addProduct} name='productdescription' defaultValue={productdescription} placeholder="Description" />
                                        </div>

                                        {/* <div style={{ marginBottom: '-40px', visibility: 'hidden' }} className="form-group content-sign-in">
                                            <input id="image_file" type="file" />
                                        </div> */}

                                        <div className="form-action">
                                            <div onClick={onAddClick} style={{ paddingLeft: '20px' }} type="submit" className="btn-small">Add</div>
                                            <div style={{ marginLeft: '10px', paddingLeft: 19 }} href='/admindroneproducts' className="btn-small">Back</div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AdminAddProducts;