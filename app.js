var express=require('express');
var app=express();

var routes=require('./routes/route.js');

//setting ejs as view engine
app.set('view engine','ejs');

app.use(express.static(__dirname + '/public'));


//routing to home
app.get('/',routes.home);

//app should run at port 3000 in local
app.get('/:city',routes.city);

//app should run at port 4000 in local
var port = process.env.PORT || 4000;

//create server using express
var server=app.listen(port,function(req,res){
    console.log("Server running at http://localhost:"+port);
});
