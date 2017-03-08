/**
 * Created by Chanaka Fernando on 1/1/2017.
 * @email nuwan.c.fernando@gmail.com
 **/
var express =require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var config = require('./app-config.json');
var utills = require('./utills');
var serviceHandler = require('./services/serviceHandler');


var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
utills.logger('Execution started',200);


serviceHandler.services(app);





app.listen(config.SERVER_PORT,function (res,err){
    if(err){
        utills.logger('Server did not started',500);
        console.log('Please Check the error'+ err);
        res.status(500);
    }
    var msg ='listnnig on port ' +config.SERVER_PORT;
    utills.logger(msg,200);
});
