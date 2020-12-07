var express = require('express');
const bodyParser = require('body-parser');
var app = express();

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "45.55.136.114:3306",
  user: "JakeJosh_F2020",
  password: "pizza1234",
  database: "JakeJosh_F2020"
});

//con.connect(function(err) {
  //if (err) throw err;
  //console.log("Connected!");
//});


app.set( 'view engine', 'pug');

app.use(express.static('public'));

app.get('/register', function(req, res){
    res.render('Register')
});

app.get('/1stpage', function(req, res){
    res.render( 'page')
});
app.post('/1stpage', function(req, res){
    res.render( 'page')
});
app.post('/register', function(req, res){

    res.render('Register')
});
app.post('/login', function(req, res){

    res.render('Login')
});
app.use( bodyParser.urlencoded({ extended:true }));

app.post('/myPost', function(req, res){
    res.render('afterPage');
    console.log('Got Body:', req.body);
    let name = req.body.Name;
    
});
app.post('/settings', function(req,res){
    res.render('settingsPage')
});

app.post('/admin', function(req, res) {
    res.render('adminPage')
});

app.listen(3000);
