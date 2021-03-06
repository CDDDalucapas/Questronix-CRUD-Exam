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
app.post('/items', (req, res) =>{
    db.query(
        'INSERT INTO items (name, qty, amount)'+
        'VALUE ("'+req.body.name+'",'+req.body.qty+','+req.body.amount+')',
        (error, results, fields) => {
            if (error) {
                console.log(error)
                return
            }
            const item = {
                id: results.insertId,
                name: req.body.name,
                qty: req.body.qty,
                amount: req.body.amount
            }
            res.status(200).send(item);
        }
    )
})
app.put('/items/:id', (req, res) =>{
    db.query(
        'UPDATE items '+
        'SET name= "'+req.body.name+'", qty= '+req.body.qty+', amount= '+req.body.amount +
        ' WHERE id = '+req.params.id,
        (error, results, fields) => {
            if (error) {
                console.log(error)
                return
            }
            const item = {
                id: parseInt(req.params.id),
                name: req.body.name,
                qty: req.body.qty,
                amount: req.body.amount
            }
            res.status(200).send(item);
        }
    )
})
app.delete('/items/:id', (req, res) =>{
    db.query(
        'DELETE FROM items ' +
        'WHERE id = '+req.params.id+''
    )
    res.status(200).send('This id = '+req.params.id+' is Deleted')
})
app.listen(3000, () => {
    console.log('Server running on localhost:3000')
})