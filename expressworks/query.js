var express = require('express')
var app = express()
app.listen(process.argv[2])

 app.get('/search', function(req, res){
   res.send(req.query);
})