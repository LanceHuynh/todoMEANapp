var express = require('express');
var todos = require('../../mock/todos');
//var Todo = require('../models/todo');
var router = express.Router();

router.get('/todos', function(req, res ) {
//  Todo.find({}, function(err, todos) {
//    if (err) {
//      return res.status(500).json({message: err.message});
//    }
  res.json({todos: todos});
});
//});

// TODO: add Post

// TODO: add Put

// TODO: add delete

module.exports = router;
