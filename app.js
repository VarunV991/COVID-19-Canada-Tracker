var express = require('express');
var app = express();
var PORT = process.env.PORT || 3001;

app.use(express.static(__dirname + '/public'));
app.set("view engine","ejs");

app.get('/',function(req,res){
    res.render('index')
})

app.listen(process.env.PORT || 3001);