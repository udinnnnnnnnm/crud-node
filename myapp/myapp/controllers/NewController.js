var db = require('../db/index')

exports.list_all_tasks = function(req, res, next) {
    res.render('index', { title: 'Express' });
  };
