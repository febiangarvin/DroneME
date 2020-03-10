const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = process.env.PORT || 2020

const { mysqldb } = require('./connections')
mysqldb.connect(err => {
    if (err) throw err;
    console.log('Mysql connected...');
})

app.use(cors())
app.use(bodyParser.json()) // //menggunakan body-parser untuk mengambil query dari body html
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))

app.get('/', (req, res) => {
    return res.status(200).send('<h1>Welcome to droneME</h1>')
})

const { authrouter, productrouter, userrouter } = require('./routes')

app.use('/auth', authrouter)
app.use('/products', productrouter)
app.use('/users', userrouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`)) // //notifikasi pada terminal mengenai status port