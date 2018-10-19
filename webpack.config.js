var webpack = require('webpack'),
       path = require('path');

module.exports = {
    context: __dirname + '/app',
    entry: {
        app: './app.js',
    },
    output: {
        path: __dirname + '/public/scripts',
        filename: 'todo.bundle.js'
    },
};
