var express = require('express')
var app = express()
app.set('view engine', 'jade')
app.listen(process.argv[2])

app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()})
})
