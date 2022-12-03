var db = require('../db/index')
const Book = function(book){
    this.name = book.name;
    this.price = book.price
}
Book.getAll = function(result){
  
    db.query('SELECT * FROM tb_book', function(err,book){
        result(book)
    });
  };

 Book.getById =function(id, result){
    db.query('SELECT * FROM tb_book WHERE id = ?',id,function(err,book){
        console.log(book)
        result(book[0])

    })
  }

module.exports = Book;