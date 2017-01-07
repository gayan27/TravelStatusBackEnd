/**
 * Created by Chanaka Fernando on 1/1/2017.
 */

var express = require('express');
var bodyParser = require('body-parser');
var config =require('./app-configuration.json');
var utill =require('./control/utills/utils');
var services =require('./control/service_calls/services');
var app = express();


app.use(bodyParser.urlencoded({extend:true}));
utill.logger('Execution started',200);
services.serviceCalls(app);



app.listen(config.SERVER_PORT,function (res,err){
    if(err){
        utill.logger('Server did not started',500);
        console.log('Please Check the error'+err);
        res.status(500);
    }
    var msg ='listnnig on port ' +config.SERVER_PORT;
    utill.logger(msg,200);
});
