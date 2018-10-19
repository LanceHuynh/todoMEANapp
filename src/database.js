var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-todo', function() {
  if (err) {
    console.log('Something went wrong!!!');
  } else {
    console.log('Successfully connected to database!');
  }
});
