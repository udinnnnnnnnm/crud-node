var db = require('../db/index')

var bookData = require('../models/book.model')

exports.list_all_tasks = function(req, res, next) {
    res.render('index', { title: 'Express' });
  };

exports.test_modul = function(req, res){


  bookData.getAll(function(data){
    console.log(data)
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
  var id =req.query.id
  bookData.getEdit(id,function(rs){
  

    res.render('form',{books :rs[0]})

  })
}
exports.update_form = function(req,res){
  bookData.getUpdate(req.body,req.query.id,function(response){
    res.redirect('/select')
    
  })
}
exports.add = function(req,res){
  var data = req.body;
  bookData.getAdd(data,function(response){
    console.log(response)
    res.send({books: response})
  })
}

exports.delete = function(req,res){
  var id = req.params.id
  bookData.getRemove(id,function(response){
    res.send({response})
  })
}
exports.update = function(req,res){
  var data =req.body;
  bookData.getTupdate(data,function(response){
    res.send({books:response})
  })

}



exports.select_tasks = function(req, res, next){

  
    db.query('SELECT * FROM tb_book', function(err,rs){
      console.log(typeof(rs))
      res.render('select',{books: rs});
  
    });
  };