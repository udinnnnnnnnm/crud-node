var express = require('express');
var router = express.Router();

var mysql = require('mysql')
var db = mysql.createPool({
  host:'localhost',
  user:'root',
  database:'crud_need',
  debug:false
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test',function(req, res, next){
  if(db!=null){
    res.send('connect sucsess')

  } else {
    res.send('connect false')
  }
})

router.get('/select',function(req, res, next){
  db.query('SELECT * FROM tb_book', function(err,rs){
    res.render('select',{books: rs});
  });
});

router.get('/form',function(req, res, next){
  res.render('form')
})

router.post('/form', function(req, res, next){
  db.query('INSERT  INTO  tb_book SET ?', req.body,function(err, rs){
    res.send('insert sucssec')
  })
})
module.exports = router;
