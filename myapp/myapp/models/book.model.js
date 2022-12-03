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

module.exports = Book;