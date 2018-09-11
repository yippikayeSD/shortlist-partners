//initializing modules
var express = require('express');
var bodyParser = require('body-parser');
var ejs = require ('ejs');
var expressValidator = require('express-validator');
var port = 9797;
var path = require('path');
//initializing app and middleware
var app = express();
//bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//validator
app.use(expressValidator());


// setting up static directory and global variables
app.use(express.static(path.join(__dirname,'resources')));
    //global
    app.use((req,res,next)=>{
        //set global variables here
        res.locals.SampleGlobal = null;
        next();
    });
//Setting up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//setting up routes
app.get('/',(req,res)=>{
    res.render('index');
});




//configuring express server 
app.listen(process.env.PORT || port, ()=>{
    console.log('Port opened successfully. Server now listening @port: '+port);
    
});
