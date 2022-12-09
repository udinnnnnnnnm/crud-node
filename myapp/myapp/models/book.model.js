var db = require('../db/index')
const Book = function(book){
    this.name = book.name;
    this.price = book.price
}
Book.getAll = function(result){
  
    db.query('SELECT * FROM tb_book', function(err,books){
        console.log(Book.getAll)
        
        result(books)
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


Book.getAdd = function(data,result){


    db.query('INSERT INTO tb_book SET ?',data,function(err,rs){
        if(err){
            result(null)
        }else{
            console.log(rs)
            result({id: rs.insertId , ...data})

        }

    })
}
Book.getDelete = function(id,result){
    db.query('DELETE FROM tb_book WHERE id = ?',id,function(err,book){
        result('xoa du lieu '+id+' thj')
    })
}
Book.getEdit = function(id,result){

    db.query('SELECT * FROM tb_book WHERE id = ?',id,function(err,book){

        if(err){
            result(null)
        }else{
        result(book)
        }
    })


}
Book.getUpdate = function(query,id,result){
    db.query('UPDATE tb_book SET ? WHERE id = ?',[query,id],function(err,book){
        result(book)
    })
}
Book.getRemove = function(id,result){
    console.log(id)

    db.query('DELETE FROM tb_book WHERE id = ?',id,function(err,book){
        if(err){
            result(null)
        }else{
        result('delete complete')
        }
    })
}

Book.getTupdate = function(data,result){
    result(data)
}
module.exports = Book;