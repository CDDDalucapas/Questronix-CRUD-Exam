const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'inventory'
})
 
connection.connect((error) => { 
    if (error) {
        console.error('error connecting: ' + error.stack)
        return 
    }
    console.log('db connected');
})

connection.query(
    'CREATE TABLE IF NOT EXISTS items ( '+
        'id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, ' +
        'name VARCHAR(255) NOT NULL, ' +
        'qty INT(6) NOT NULL,' +
        'amount FLOAT(60,2) NOT NULL ' +
    ')'
    ,
    (error, results, fields) => {
        if (error) {
            console.log(error)
            return
        }
        console.log('Created Item Table!');
    }
)
module.exports=connection;