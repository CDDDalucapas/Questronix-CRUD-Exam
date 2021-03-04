const db = require('./db-connection')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
//helps receive body from request
//for req json format
app.use(bodyParser.json())

app.get('/items', (req, res) =>{
    db.query(
        'SELECT * from items'
        ,
        (error, results, fields) => {
          if (error) {
            console.log(error)
            return
          }
          res.status(200).send(results);
        }
    )
})

app.listen(3000, () => {
    console.log('Server running on localhost:3000')
})