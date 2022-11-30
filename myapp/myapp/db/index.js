var mysql = require('mysql')
const db = mysql.createPool({
  host:'localhost',
  user:'root',
  database:'crud_need',
  debug:false
})

module.exports = db;