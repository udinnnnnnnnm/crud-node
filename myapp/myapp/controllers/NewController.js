var db = require('../db/index')

var bookData = require('../models/book.model')

exports.list_all_tasks = function(req, res, next) {
    res.render('index', { title: 'Express' });
  };

exports.test_modul = function(req, res){


  bookData.getAll(function(data){
    res.render('select',{books: data})
  });

}
exports.test_id= function(req,res){

     bookData.getById(req.params.id,function(response){
      res.send({book: response})

     });

  
}

exports.select_tasks = function(req, res, next){

  
    db.query('SELECT * FROM tb_book', function(err,rs){
      console.log(typeof(rs))
      res.render('select',{books: rs});
  
    });
  };