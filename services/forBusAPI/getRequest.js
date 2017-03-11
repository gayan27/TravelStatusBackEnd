/**
 * Created by Chanaka Fernando on 3/2/2017.
 * @email nuwan.c.fernando@gmail.com
 */
var utills = require('../../utills');
var path = require('path');
var request = require('request');
var collectionModels = require('../../dataModels/collectionModels');
var config = require('../../app-config.json');


/**
 * all the get request relevent to the BUSscheduleAPI, from the user, is handled here
 * @param app
 */
module.exports.getMethods = function (app) {
    utills.logger(__dirname + "\\getRequest.js", 200);


    app.get('/get/all-bus', function (req, res) {
        utills.logger("successfully accessed " + req.url, 200);
        request(config.BUS_SERVICE+'/get/all-bus', function (err, response, body) {
            if (!err && response.statusCode == 200) {
                var obj = JSON.parse(body);
                obj = obj.content;
                var l=obj.length;
                console.log(l);
                utills.sendResponce(200,res,err,obj);
            }
        })

    });


    /**
     *send all conductors listed in the DB
     */
    app.get('/get/all-conductor', function (req, res) {
        utills.logger("successfuly accesed " + req.url, 200);
        request(config.BUS_SERVICE+'/get/all-conductor', function (err, response, body) {
            if (!err && response.statusCode == 200) {
                var obj = JSON.parse(body);
                obj = obj.content;
                utills.sendResponce(200,res,err,obj);
            }
        });



    });


    /**
     * send all driver data ,listed in the database
     */
    app.get('/get/all-driver', function (req, res) {
        utills.logger("successfuly accesed " + req.url, 200);
        request(config.BUS_SERVICE+'/get/all-driver', function (err, response, body) {
            if (!err && response.statusCode == 200) {
                var obj = JSON.parse(body);
                obj = obj.content;
                utills.sendResponce(200,res,err,obj);
            }
        })

    });


//==========================================================================================


    /**
     * send specific bus data by given bus ID
     */
    app.get('/get/bus/:id', function (req, res) {
        utills.logger("successfully accessed " + req.url, 200);
        request(config.BUS_SERVICE+'/get/bus/'+req.params.id, function (err, response, body) {
            if (!err && response.statusCode == 200) {
                console.log(req.params.id);
                var obj = JSON.parse(body);
                obj = obj.content;
                utills.sendResponce(200,res,err,obj);
            }
        })

    });


    /**
     * send specific conductor data by given NTC ID
     */
    app.get('/get/conductor/:ntc', function (req, res) {
        utills.logger("successfully accessed " + req.url, 200);
       // var ntc = req.params.ntc;
        request(config.BUS_SERVICE+'/get/conductor/'+req.params.ntc, function (err, response, body) {
            if (!err && response.statusCode == 200) {
                var obj = JSON.parse(body);
                obj = obj.content;
                utills.sendResponce(200,res,err,obj);
            }
        })

    });


    /**
     * send a specific driver data by given drver NTC
     */
    app.get('/get/driver/:ntc', function (req, res) {
        utills.logger('successfully accesed ' + req.url, 200);
      //  var ntc = req.params.ntc;
        request(config.BUS_SERVICE+'/get/driver/'+req.params.ntc, function (err, response, body) {
            if (!err && response.statusCode == 200) {
                var obj = JSON.parse(body);
                obj = obj.content;
                utills.sendResponce(200,res,err,obj);
            }
        })



    });


    //===========================================================================




    /**
     * this method will return scheduled buses befor the requested time
     */
    app.get('/get/past-schedule/:startLocation/:endLocation/:sTime',function (req,res) {
        utills.logger('successfully accessed ' + req.url, 200);
        var sLocation = req.params.startLocation;
        var eLocation = req.params.endLocation;
        var sTime     = parseInt(req.params.sTime);
        request(config.BUS_SERVICE+'/get/past-schedule/'+sLocation+'/'+ eLocation +'/'+sTime, function (err, response, body) {
            if (!err && response.statusCode == 200) {
                var obj = JSON.parse(body);
                obj = obj.content;
               // console.log(obj);
                utills.sendResponce(200,res,err,obj);
            }
        })



    });



    /**
     * this method will return scheduled buses after the requested time
     */
    app.get('/get/future-schedule/:startLocation/:endLocation/:sTime',function (req,res) {
        utills.logger('successfully accessed ' + req.url, 200);
        var sLocation =   req.params.startLocation;
        var eLocation = req.params.endLocation;
        var sTime      = parseInt(req.params.sTime);
        request(config.BUS_SERVICE+'/get/future-schedule/'+sLocation+'/'+ eLocation +'/'+sTime, function (err, response, body) {
            if (!err && response.statusCode == 200) {
                var obj = JSON.parse(body);
                obj = obj.content;
                utills.sendResponce(200,res,err,obj);
            }
        })

    });


    app.get('/get/summary', function (req, res) {
        utills.logger("successfully accessed " + req.url, 200);
        request(config.BUS_SERVICE + '/get/summary', function (err, response, body) {
            if (!err && response.statusCode == 200) {
                var obj = JSON.parse(body);
                obj = obj.content;
                console.log(obj);
                utills.sendResponce(200,res,err,obj);

            }
        });

    });


};

