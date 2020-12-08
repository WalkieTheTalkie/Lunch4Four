var express = require('express');
const bodyParser = require('body-parser');
var app = express();

var mysql = require('mysql');

const connection = mysql.createConnection({
    host: "45.55.136.114",
    user: "JakeJosh_F2020",
    password: "pizza1234",
    database: "JakeJosh_F2020"
});

connection.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Connected to MySQL DBMS...!');
});



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
    connection.query("select * from LunchGroup where GroupID = '1'", function(err2, res2){
        if(err2) throw err2;
        console.log("we ok");
        let data = {};
        for(let i in res2){
                //some code that takes the request from login
                //and displays results i guess
            data = {
                id : res2[i].GroupID,
                date : res2[i].GroupDate,
                leaderName : res2[i].GroupLeader_UName,
                    //leaderDept : res2[i].User_Department,
                leaderEmail : res2[i].GroupLeader_EMail,
                gr1N : res2[i].GroupMember1_UName,
                gr1E : res2[i].GroupMember1_EMail,
                gr2N : res2[i].GroupMember2_UName,
                gr2E : res2[i].GroupMember2_EMail,
                gr3N : res2[i].GroupMember3_UName,
                gr3E : res2[i].GroupMember3_EMail
            }
        }
        if(err2) throw err2;
        console.log(data);
        res.render('afterPage', data);

    })

});
app.get('/myPost', function(req, res){
    res.render('afterPage')
});

app.post('/settings', function(req,res){
    res.render('settingsPage')
});

app.post('/admin', function(req, res) {
    res.render('adminPage')
});

app.listen(3000);
