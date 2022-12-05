
var db = require('../db/index')

var express = require('express');
var router = express.Router();

var todo = require('../controllers/NewController')



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express2' });
});

router. get('/hume',todo.list_all_tasks)
router.get('/json',function(req,res){
  db.query('SELECT * FROM tb_book', function(err,rs){
    console.log(rs)
    
    res.json({uu: rs[2]})
  })
  
})


router.get('/modul',todo.test_modul)
router.get('/test',function(req, res, next){
  if(db!=null){
    res.send('connect sucsess')

  } else {
    res.send('connect false')
  }
})

router.get('/select',todo.select_tasks);
router.get('/find/:id',todo.test_id);


router.get('/select/:id',function(req, res, next){  
  db.query('SELECT * FROM tb_book WHERE id = ?',req.params.id, function(err,rs){
    res.json(rs)
    console.log(rs)

  });
})
router.get('/tform',todo.test_form)
router.post('/tform',todo.post_form)
router.get('/tdelete',todo.test_delete)
router.get('/tedit',todo.test_edit)
router.post('/tedit',todo.update_form)





router.get('/form',function(req, res, next){
  res.render('form',{ books :{}})
})

router.post('/form', function(req, res, next){
    var data = req.body
  
  db.query('INSERT  INTO  tb_book SET ?', req.body,function(err, rs){
    res.redirect('/select')
    console.log(req.body)
  })
})

router.get('/delete',function(req, res, next){
  console.log(req.query.id)
  db.query('DELETE FROM tb_book WHERE id = ?',req.query.id, function(err, rs){
    console.log(rs)
    res.redirect('/select')
  })
})
router.get('/edit',function(req, res, next){
  db.query('SELECT * FROM tb_book WHERE id = ?',req.query.id,function(err, rs){
    res.render('form',{books :rs[0]})
  })

})

router.post('/edit',function(req, res, next){
  var param = [
    req.body,
    req.query.id
  ]

  
  db.query('UPDATE tb_book SET ? WHERE id = ?', param, function(err, rs){
    res.redirect('select');
  })
})
module.exports = router;
