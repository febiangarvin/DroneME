const { mysqldb } = require('./../connections')
const { uploader } = require('./../helpers/uploader')
const fs = require('fs')
const paginate = require('jw-paginate')

module.exports = {

    // //============================== CREATE FUNCTION =======================================================// //

    postProducts: (req, res) => { // //function posting product
        const path = '/products/images' // //variable path image product
        const upload = uploader(path, 'products').fields([{ name: 'image' }]) // //variable uploader yang diambil dari helper uploader

        upload(req, res, err => {
            if (err) { // //jika error
                return res.status(500).json({ message: 'Upload Fail', error: err.message })
            }

            const { image } = req.files // // variable object image yang berupa request dari files
            // //variable imagepath. Jika ada image-nya,maka dibuatkan path tambah "/" tambah filename dari image tersebut. Jika tidak ada, me-return null
            const imagePath = image ? path + '/' + image[0].filename : null

            const data = JSON.parse(req.body.products) // //variable data yang berisi product yang sudah di return dalam bentuk parse
            data.productimage = imagePath // //variable productimage berupa imagePath yang sudah dibuat di atas

            var sql = `INSERT INTO products SET ?` // //sql INSERT kepada tabel products
            mysqldb.query(sql, data, (err, res2) => {
                if (err) { // //jika terjadi error
                    fs.unlinkSync("./public" + imagePath);
                    return res.status(500).json({ message: 'There is an error on the server', error: err.message })
                }

                sql = 'SELECT * FROM products' // //sql untuk memilih semua products yang terdapat di tabel
                mysqldb.query(sql, (err1, result1) => {
                    if (err1) res.status(500).send(err1)
                    res.status(200).send({ dataDrone: result1 })
                })
            })
        })
    },

    // //============================== READ FUNCTION =========================================================// //

    getDroneProducts: (req, res) => {
        // //sql syntax buat count total product dengan type tertentu
        const sqlCount = `SELECT COUNT(*) AS count FROM products WHERE idproducttypes=1`

        let dataCount // //action database

        mysqldb.query(sqlCount, (err, results) => {
            if (err) res.status(500).send(err)
            dataCount = results[0].count // //result collection data

            const page = parseInt(req.params.id) || 1 // //ambil objek dari page yang diinginkan, atau defaultnya; 1
            console.log(page)
            const pageSize = 8 // //variable untuk menentuka berapa dataCount dalam 1 page
            const pager = paginate(dataCount, page, pageSize) // //variable pager yang menggunakan method paginat dengan 3 parameter yang dibawa

            let offset // //setting limit offset dari database
            if (page === 1) { // //kondisi jika page saat itu di 1, maka tidak ada offset
                offset = 0
            }
            else { // //kondisi jika tidak
                offset = pageSize * (page - 1) // //maka offset sama dengan; pageSize dikali (page kurang 1)
            }

            // //variable syntax sql mengikuti types terntentu, beserta kondisi LIMIT dan OFFSET
            const sql =
                `SELECT p.idproducts, p.productname, p.productimage, p.productprice, p.productstock, pt.producttypes, p.productdescription 
                FROM products p JOIN producttypes pt ON p.idproducttypes=pt.idproducttypes 
                WHERE p.idproducttypes=1 LIMIT ? OFFSET ?`

            // //buat query yang berisi sql, beserta array paremeter pageSize (LIMIT) dan offset
            mysqldb.query(sql, [pageSize, offset], (err2, res2) => {
                if (err2) return res.status(500).send(err2)
                const pageOfData = res2 // //variable data page berdasarkan result dari frontend
                return res.status(200).send({ pageOfData, pager }) // //me-return variable data page serta hasil paginate 3 parameter
            })
        })
    },

    getDroneAccessoriesProducts: (req, res) => {
        const sqlCount = `SELECT COUNT(*) AS count FROM products WHERE idproducttypes=2`

        let dataCount

        mysqldb.query(sqlCount, (err, results) => {
            if (err) res.status(500).send(err)
            dataCount = results[0].count

            const page = parseInt(req.params.id) || 1
            console.log(page)
            const pageSize = 8
            const pager = paginate(dataCount, page, pageSize)

            let offset
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
        const sqlCount = `SELECT COUNT(*) AS count FROM products WHERE idproducttypes=3`

        let dataCount

        mysqldb.query(sqlCount, (err, results) => {
            if (err) res.status(500).send(err)
            dataCount = results[0].count

            const page = parseInt(req.params.id) || 1
            console.log(page)
            const pageSize = 8
            const pager = paginate(dataCount, page, pageSize)

            let offset
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

    getProductTypes: (req, res) => { // //function untuk mengambil product type
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

    editDroneProducts: (req, res) => { // //function edit product
        var sql = `SELECT * FROM products WHERE idproducts = ${req.params.id}` // //buat syntax sql untuk mengambil data berdasarkan id tertentu
        mysqldb.query(sql, (err, res1) => {
            if (err) res.status(500).send(err);

            if (res1.length) { // //jika terdapat product
                const path = '/products/images' // //variable path image product
                const upload = uploader(path, 'products').fields([{ name: 'image' }]) // //variable uploader yang diambil dari helper uploader

                upload(req, res, err => {
                    if (err) { // //jika error
                        return res.status(500).send({ message: 'Upload Fail', error: err.message })
                    }

                    const { image } = req.files // // variable object image yang berupa request dari files
                    console.log('image', req.files)
                    // //variable imagepath. Jika ada image-nya,maka dibuatkan path tambah "/" tambah filename dari image tersebut. Jika tidak ada, me-return null
                    const imagePath = image ? path + '/' + image[0].filename : null

                    const data = JSON.parse(req.body.data)// //variable data yang berisi product yang sudah di return dalam bentuk parse

                    if (imagePath) { // //kondisi jika ada imagePath
                        data.productimage = imagePath // //variable productimage berupa imagePath yang sudah dibuat di atas
                    }

                    var sql = `UPDATE products SET ? WHERE idproducts = ${req.params.id}`
                    mysqldb.query(sql, data, (err, res2) => {
                        if (err) { // //jika terjadi error
                            if (imagePath) {
                                fs.unlinkSync(`./public${imagePath}`)
                            }
                            return res.status(500).json({
                                message: 'There is an error on the server',
                                error: err.message
                            })
                        }

                        if (imagePath) {
                            if (res1[0].productimage) { // //jika sebelumnya sudah ada productImage, maka melakukan delete (unlinkSync)
                                fs.unlinkSync(`./public${res1[0].productimage}`)
                            }
                        }
                        // //sql untuk memilih data product tertentu
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
                        return res.status(500).send({ message: 'Upload Fail', error: err.message })
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
        var sql = `SELECT productimage FROM products WHERE idproducts = ${req.params.id};` // //buat syntax sql untuk mengambil data berdasarkan id tertentu
        mysqldb.query(sql, (err, resImage) => { // //buat query dengan parameter khusu untuk result image
            if (err) res.status(500).send(err);
            // //jika terdapat productimage, maka melakukan unlinksync
            resImage[0].productimage !== null && fs.unlinkSync('./public' + resImage[0].productimage)
            console.log(`Image for id: ${req.params.id} has been deleted`)

            // //buat sql untuk melakukan delet products berdasarkan id tertentu (yang di klik)
            var sql = `DELETE FROM products WHERE idproducts = ${req.params.id};`
            mysqldb.query(sql, (err, results) => {
                if (err) return res.status(500).send(err)
                return res.status(200).send(results)
            })
        })
    },

}