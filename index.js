const db = require('./db-connection')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
//helps receive body from request
//for req json format
app.use(bodyParser.json())

app.get('/sampleitems', (req, res) =>{
    res.status(200).send(
        [
            {
                id:1,
                name:'qeuk',
                qty:50,
                amount:1000
            },
            {
                id:2,
                name:'bola',
                qty:23,
                amount:5400
            },
            {
                id:3,
                name:'britsle',
                qty:4,
                amount:310
            }
        ]
    )
})

app.listen(3000, () => {
    console.log('Server running on localhost:3000')
})