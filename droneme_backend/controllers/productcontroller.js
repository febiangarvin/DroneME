const { mysqldb } = require('./../connections')
const { uploader } = require('./../helpers/uploader')
const fs = require('fs')
const paginate = require('jw-paginate')

module.exports = {

    // //============================== CREATE FUNCTION =======================================================// //

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

    // //============================== READ FUNCTION =========================================================// //

    getDroneProducts: (req, res) => {
        const sqlCount = `SELECT COUNT(*) AS count FROM products WHERE idproducttypes=1` // //sql syntax buat count

        let dataCount // //action database

        mysqldb.query(sqlCount, (err, results) => {
            if (err) res.status(500).send(err)
            dataCount = results[0].count // //collection data

            const page = parseInt(req.params.id) || 1 // //ambil objek dari page yang diinginkan
            console.log(page)
            const pageSize = 8
            const pager = paginate(dataCount, page, pageSize)

            let offset // //setting limit offset dari database
            if (page === 1) {
                offset = 0
            }
            else {
                offset = pageSize * (page - 1)
            }
            const sql =
                `SELECT p.idproducts, p.productname, p.productimage, p.productprice, p.productstock, pt.producttypes, p.productdescription 
                FROM products p JOIN producttypes pt ON p.idproducttypes=pt.idproducttypes 
                WHERE p.idproducttypes=1 LIMIT ? OFFSET ?`

            mysqldb.query(sql, [pageSize, offset], (err2, res2) => {
                if (err2) return res.status(500).send(err2)
                const pageOfData = res2
                return res.status(200).send({ pageOfData, pager })
            })
        })
    },

    getDroneAccessoriesProducts: (req, res) => {
        const sqlCount = `SELECT COUNT(*) AS count FROM products WHERE idproducttypes=2` // //sql syntax buat count

        let dataCount // //action database

        mysqldb.query(sqlCount, (err, results) => {
            if (err) res.status(500).send(err)
            dataCount = results[0].count // //collection data

            const page = parseInt(req.params.id) || 1 // //ambil objek dari page yang diinginkan
            console.log(page)
            const pageSize = 8
            const pager = paginate(dataCount, page, pageSize)

            let offset // //setting limit offset dari database
            if (page === 1) {
                offset = 0
            }
            else {
                offset = pageSize * (page - 1)
            }
            const sql =
                `SELECT p.idproducts, p.productname, p.productimage, p.productprice, p.productstock, pt.producttypes, p.productdescription 
                FROM products p JOIN producttypes pt ON p.idproducttypes=pt.idproducttypes 
                WHERE p.idproducttypes=2 LIMIT ? OFFSET ?`

            mysqldb.query(sql, [pageSize, offset], (err2, res2) => {
                if (err2) return res.status(500).send(err2)
                const pageOfData = res2
                return res.status(200).send({ pageOfData, pager })
            })
        })
    },

    getAccessoriesProducts: (req, res) => {
        const sqlCount = `SELECT COUNT(*) AS count FROM products WHERE idproducttypes=3` // //sql syntax buat count

        let dataCount // //action database

        mysqldb.query(sqlCount, (err, results) => {
            if (err) res.status(500).send(err)
            dataCount = results[0].count // //collection data

            const page = parseInt(req.params.id) || 1 // //ambil objek dari page yang diinginkan
            console.log(page)
            const pageSize = 8
            const pager = paginate(dataCount, page, pageSize)

            let offset // //setting limit offset dari database
            if (page === 1) {
                offset = 0
            }
            else {
                offset = pageSize * (page - 1)
            }
            const sql =
                `SELECT p.idproducts, p.productname, p.productimage, p.productprice, p.productstock, pt.producttypes, p.productdescription 
                FROM products p JOIN producttypes pt ON p.idproducttypes=pt.idproducttypes 
                WHERE p.idproducttypes=3 LIMIT ? OFFSET ?`

            mysqldb.query(sql, [pageSize, offset], (err2, res2) => {
                if (err2) return res.status(500).send(err2)
                const pageOfData = res2
                return res.status(200).send({ pageOfData, pager })
            })
        })
    },

    getProductTypes: (req, res) => {
        var sql = 'SELECT * FROM producttypes'
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    getDroneBodyProducts: (req, res) => {
        var sql = `SELECT p.idproducts, p.productname, p.productimage, p.productprice, p.productstock, pt.producttypes, p.productdescription FROM products p JOIN producttypes pt ON p.idproducttypes=pt.idproducttypes WHERE p.idproducttypes=2 AND productname LIKE '%body%'`
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    getDroneWingProducts: (req, res) => {
        var sql = `SELECT p.idproducts, p.productname, p.productimage, p.productprice, p.productstock, pt.producttypes, p.productdescription FROM products p JOIN producttypes pt ON p.idproducttypes=pt.idproducttypes WHERE p.idproducttypes=2 AND productname LIKE '%wing%'`
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    getDroneMotorProducts: (req, res) => {
        var sql = `SELECT p.idproducts, p.productname, p.productimage, p.productprice, p.productstock, pt.producttypes, p.productdescription FROM products p JOIN producttypes pt ON p.idproducttypes=pt.idproducttypes WHERE p.idproducttypes=2 AND productname LIKE '%motor%'`
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    getDroneBatteryProducts: (req, res) => {
        var sql = `SELECT p.idproducts, p.productname, p.productimage, p.productprice, p.productstock, pt.producttypes, p.productdescription FROM products p JOIN producttypes pt ON p.idproducttypes=pt.idproducttypes WHERE p.idproducttypes=2 AND productname LIKE '%battery%'`
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    // //============================== UPDATE FUNCTION =======================================================// //

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

    // //============================== DELETE FUNCTION =======================================================// //

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