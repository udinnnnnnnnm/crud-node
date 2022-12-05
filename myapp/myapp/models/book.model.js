var db = require('../db/index')
const Book = function(book){
    this.name = book.name;
    this.price = book.price
}
Book.getAll = function(result){
  
    db.query('SELECT * FROM tb_book', function(err,book){
        console.log(book)
        
        result(book)
    });
  };

 Book.getById =function(id, result){
    db.query('SELECT * FROM tb_book WHERE id = ?',id,function(err,book){
        console.log(book)
        result(book[0])

    })
  }
Book.getForm = function(id,result){
    db.query('INSERT  INTO  tb_book SET ?', id,function(err, rs){
        result()
      })
    
}
Book.getDelete = function(id,result){
    db.query('DELETE FROM tb_book WHERE id = ?',id,function(err,book){
        console.log(book)
        result()
    })
}
Book.getEdit = function(id,result){

    db.query('SELECT * FROM tb_book WHERE id = ?',id,function(err,book){
        result(book)
    })


}
Book.getUpdate = function(query,id,result){
    db.query('UPDATE tb_book SET ? WHERE id = ?',[query,id],function(err,book){
        result(book)
    })
}
module.exports = Book;