var express = require("express");
var app = express();
app.set('view engine', 'pug');
app.use(express.static('public'));
var mysql = require("mysql");

var con = mysql.createConnection({
    host: "45.55.136.114",
    user: "csc3610",
    password: "csc3610",
    database: "csc3610"
});

app.set('views','views');



app.get('/home', function(req, res){
    con.connect(function(err){
        if(err) throw err;
        con.query("select * from Lunch4FourUserTest where Fname = 'John'", function(err2, res2){
            console.log("we ok");
            let data = {};
            for(let i in res2){
                //some code that takes the request from login
                //and displays results i guess
                     data = {
                        user : res2[i].Fname,
                        date : res2[i].schedule
                    }
                }     
            if(err2) throw err2;
                    console.log(data);
                     res.render('homePage', data);
                
               })
    })
 });



/*con.connect(function(err){
    if(err) throw err;
    con.query("select * from BestSellingBooks", function(err2, res, fields){
        if(err2) throw err;
        console.log(res);
        for(let i in res){
            console.log(`Title: ${res[i].Title}`);
        }
    })
})*/
 app.listen(3000);