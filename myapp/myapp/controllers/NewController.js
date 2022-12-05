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
      console.log(response)
      res.send({book: response})

      console.log('haha')

     });
     console.log('haha')

  
}

exports.test_form = function(req, res, next){
  res.render('form',{ books :{}})
}

exports.post_form = function(req, res, next){
  bookData.getForm(req.body.id,function(){

    res.redirect('/select')

  })
}

exports.test_delete = function(req,res){
  bookData.getDelete(req.query.id,function(err,rs){
    res.redirect('/select')
  })

}

exports.test_edit = function(req, res){
  bookData.getEdit(req.query.id,function(err,rs){
    res.render('form',{books :err[0]})

  })
}
exports.update_form = function(req,res){
  bookData.getUpdate(req.body,req.query.id,function(response){
    res.redirect('/select')
    
  })
}





exports.select_tasks = function(req, res, next){

  
    db.query('SELECT * FROM tb_book', function(err,rs){
      console.log(typeof(rs))
      res.render('select',{books: rs});
  
    });
  };