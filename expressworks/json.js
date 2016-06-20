var express = require('express')
var fs = require("fs")
var app = express()

app.listen(process.argv[2])

app.get('/books', function(req, res) {
  fs.readFile(process.argv[3], function (e, data) {
    var books = JSON.parse(data)
    res.json(books)
  }) 
});
