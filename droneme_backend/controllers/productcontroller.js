const { mysqldb } = require('./../connections')
const { uploader } = require('./../helpers/uploader')
const fs = require('fs')

module.exports = {

    // //============================== Create Products =======================================================// //

    postProducts: (req, res) => {
        // try {
        const path = '/products/images'
        const upload = uploader(path, 'products').fields([{ name: 'image' }])

        upload(req, res, err => {
            if (err) {
                return res
                    .status(500)
                    .json({ message: 'Upload Fail', error: err.message })
            }

            const { image } = req.files
            const imagePath = image ? path + '/' + image[0].filename : null

            const data = JSON.parse(req.body.products)
            data.productimage = imagePath

            var sql = `INSERT INTO products SET ?`
            mysqldb.query(sql, data, (err, res2) => {
                if (err) {
                    fs.unlinkSync("./public" + imagePath);
                    return res.status(500).json({
                        message: 'There is an error on the server',
                        error: err.message
                    })
                }

                sql = 'SELECT * FROM products'
                mysqldb.query(sql, (err1, result1) => {
                    if (err1) res.status(500).send(err1)
                    res.status(200).send({ dataDrone: result1 })
                })
            })
        })
        // }
        // catch (error) {
        //     res.status(200).send({ status: error, message: 'There is a problem with the uploader' })
        // }
    },

    // //============================== Read Products =========================================================// //

    getDroneProducts: (req, res) => {
        var sql = 'SELECT p.idproducts, p.productname, p.productimage, p.productprice, p.productstock, pt.producttypes, p.productdescription FROM products p JOIN producttypes pt ON p.idproducttypes=pt.idproducttypes WHERE p.idproducttypes=1'
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    getDroneAccessoriesProducts: (req, res) => {
        var sql = 'SELECT p.idproducts, p.productname, p.productimage, p.productprice, p.productstock, pt.producttypes, p.productdescription FROM products p JOIN producttypes pt ON p.idproducttypes=pt.idproducttypes WHERE p.idproducttypes=2'
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    getAccessoriesProducts: (req, res) => {
        var sql = 'SELECT p.idproducts, p.productname, p.productimage, p.productprice, p.productstock, pt.producttypes, p.productdescription FROM products p JOIN producttypes pt ON p.idproducttypes=pt.idproducttypes WHERE p.idproducttypes=3'
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    getProductTypes: (req, res) => {
        var sql = 'SELECT * FROM producttypes'
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send(res1)
        })
    },

    // //============================== Update Products =======================================================// //

    editDroneProducts: (req, res) => {
        var sql = `SELECT * FROM products WHERE idproducts = ${req.params.id}`
        mysqldb.query(sql, (err, res1) => {
            if (err) res.status(500).send(err);

            if (res1.length) {
                const path = '/products/images'
                const upload = uploader(path, 'products').fields([{ name: 'image' }])
                upload(req, res, err => {
                    if (err) {
                        return res
                            .status(500)
                            .send({ message: 'Upload Fail', error: err.message })
                    }
                    const { image } = req.files
                    console.log('image', req.files)
                    const imagePath = image ? path + '/' + image[0].filename : null

                    const data = JSON.parse(req.body.data)

                    if (imagePath) {
                        data.productimage = imagePath
                    }

                    var sql = `UPDATE products SET ? WHERE idproducts = ${req.params.id}`
                    mysqldb.query(sql, data, (err, res2) => {
                        if (err) {
                            if (imagePath) {
                                fs.unlinkSync(`./public${imagePath}`)
                            }
                            return res.status(500).json({
                                message: 'There is an error on the server',
                                error: err.message
                            })
                        }
                        if (imagePath) {
                            if (res1[0].productimage) {
                                fs.unlinkSync(`./public${res1[0].productimage}`)
                            }
                        }
                        sql = 'SELECT p.idproducts, p.productname, p.productimage, p.productprice, p.productstock, p.productdescription, pt.producttypes FROM products p JOIN producttypes pt ON p.idproducttypes=pt.idproducttypes WHERE p.idproducttypes=1'
                        mysqldb.query(sql, (err1, result1) => {
                            if (err1) res.status(500).send(err1)

                            console.log(result1[0])

                            res.status(200).send({ dataDrone: result1 })
                        })
                    })
                })
            }
        })
    },

    editDroneAccessoriesProducts: (req, res) => {
        var sql = `SELECT * FROM products WHERE idproducts = ${req.params.id}`
        mysqldb.query(sql, (err, res1) => {
            if (err) res.status(500).send(err);

            if (res1.length) {
                const path = '/products/images'
                const upload = uploader(path, 'products').fields([{ name: 'image' }])
                upload(req, res, err => {
                    if (err) {
                        return res
                            .status(500)
                            .send({ message: 'Upload Fail', error: err.message })
                    }
                    const { image } = req.files
                    console.log('image', req.files)
                    const imagePath = image ? path + '/' + image[0].filename : null

                    const data = JSON.parse(req.body.data)

                    if (imagePath) {
                        data.productimage = imagePath
                    }

                    var sql = `UPDATE products SET ? WHERE idproducts = ${req.params.id}`
                    mysqldb.query(sql, data, (err, res2) => {
                        if (err) {
                            if (imagePath) {
                                fs.unlinkSync(`./public${imagePath}`)
                            }
                            return res.status(500).json({
                                message: 'There is an error on the server',
                                error: err.message
                            })
                        }
                        if (imagePath) {
                            if (res1[0].productimage) {
                                fs.unlinkSync(`./public${res1[0].productimage}`)
                            }
                        }
                        sql = 'SELECT p.idproducts, p.productname, p.productimage, p.productprice, p.productstock, p.productdescription, pt.producttypes FROM products p JOIN producttypes pt ON p.idproducttypes=pt.idproducttypes WHERE p.idproducttypes=2'
                        mysqldb.query(sql, (err1, result1) => {
                            if (err1) res.status(500).send(err1)

                            console.log(result1[0])

                            res.status(200).send({ dataDrone: result1 })
                        })
                    })
                })
            }
        })
    },

    editAccessoriesProducts: (req, res) => {
        var sql = `SELECT * FROM products WHERE idproducts = ${req.params.id}`
        mysqldb.query(sql, (err, res1) => {
            if (err) res.status(500).send(err);

            if (res1.length) {
                const path = '/products/images'
                const upload = uploader(path, 'products').fields([{ name: 'image' }])
                upload(req, res, err => {
                    if (err) {
                        return res
                            .status(500)
                            .send({ message: 'Upload Fail', error: err.message })
                    }
                    const { image } = req.files
                    console.log('image', req.files)
                    const imagePath = image ? path + '/' + image[0].filename : null

                    const data = JSON.parse(req.body.data)

                    if (imagePath) {
                        data.productimage = imagePath
                    }

                    var sql = `UPDATE products SET ? WHERE idproducts = ${req.params.id}`
                    mysqldb.query(sql, data, (err, res2) => {
                        if (err) {
                            if (imagePath) {
                                fs.unlinkSync(`./public${imagePath}`)
                            }
                            return res.status(500).json({
                                message: 'There is an error on the server',
                                error: err.message
                            })
                        }
                        if (imagePath) {
                            if (res1[0].productimage) {
                                fs.unlinkSync(`./public${res1[0].productimage}`)
                            }
                        }
                        sql = 'SELECT p.idproducts, p.productname, p.productimage, p.productprice, p.productstock, p.productdescription, pt.producttypes FROM products p JOIN producttypes pt ON p.idproducttypes=pt.idproducttypes WHERE p.idproducttypes=3'
                        mysqldb.query(sql, (err1, result1) => {
                            if (err1) res.status(500).send(err1)

                            console.log(result1[0])

                            res.status(200).send({ dataDrone: result1 })
                        })
                    })
                })
            }
        })
    },

    // //============================== Delete Products =======================================================// //

    deleteProducts: (req, res) => {
        var sql = `SELECT productimage FROM products WHERE idproducts = ${req.params.id};`
        mysqldb.query(sql, (err, resImage) => {
            if (err) res.status(500).send(err);
            resImage[0].productimage !== null && fs.unlinkSync('./public' + resImage[0].productimage)
            console.log(`Image for id: ${req.params.id} has been deleted`)

            var sql = `DELETE FROM products WHERE idproducts = ${req.params.id};`

            mysqldb.query(sql, (err, results) => {
                if (err) return res.status(500).send(err)
                return res.status(200).send(results)
            })
        })
    },

}