var express = require('express');
var app = express();
var cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs');
var PORT = process.env.PORT || 3001;

app.use(express.static(__dirname + '/public'));
app.set("view engine","ejs");

app.get('/',function(req,res){
        res.render('index')
})

app.listen(PORT ,process.env.IP,function(){
    console.log("COVID tracker has started");
})