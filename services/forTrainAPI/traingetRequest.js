/**
 * Created by Gayan Sampath on 3/9/2017.
 */
var utills = require('../../utills');
var request = require('request');
var collectionModels = require('../../dataModels/collectionModels');
var config = require('../../app-config.json');


/**
 * all the get request relevent to the TrainscheduleAPI, from the user, is handled here
 * @param app
 */
module.exports.getMethods = function (app) {
    utills.logger(__dirname + "\\getRequest.js", 200);


    app.get('/get/all-train', function (req, res) {
        utills.logger("successfully accessed " + req.url, 200);
        request(config.TRAIN_SERVICE + '/get/all-train', function (err, response, body) {
            if (!err && response.statusCode == 200) {
                var obj = JSON.parse(body);
                obj = obj.content;
                var l = obj.length;
                console.log(l);
                utills.sendResponce(200, res, err, obj);
            }
        })

    });





    /**
     * send specific train data by given train ID
     */
    app.get('/get/train/:id', function (req, res) {
        utills.logger("successfully accessed " + req.url, 200);
        var id = req.params.id;
        request(config.TRAIN_SERVICE + '/get/train/' + req.params.id, function (err, response, body) {
            if (!err && response.statusCode == 200) {
                console.log(req.params.id);
                var obj = JSON.parse(body);
                obj = obj.content;
                utills.sendResponce(200, res, err, obj);
            }
        })

    });




    /**
     * send all driver data ,listed in the database
     */
    app.get('/get/all-driver', function (req, res) {
        utills.logger("successfully accessed " + req.url, 200);
        request(config.TRAIN_SERVICE+'/get/all-driver', function (err, response, body) {
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
        var ntc = req.params.ntc;
        request(config.TRAIN_SERVICE+'/get/driver/'+req.params.ntc, function (err, response, body) {
            if (!err && response.statusCode == 200) {
                var obj = JSON.parse(body);
                obj = obj.content;
                utills.sendResponce(200,res,err,obj);
            }
        })



    });





    /**
     * this method will return scheduled train after the requested time
     */
    app.get('/get/future-schedule/:startLocation/:endLocation/:sTime', function (req, res) {
        var sLocation = req.params.startLocation;
        var eLocation = req.params.endLocation;
        var sTime = parseInt(req.params.sTime);
        request(config.TRAIN_SERVICE + '/get/future-schedule/' + sLocation + '/' + eLocation + '/' + sTime, function (err, response, body) {
            if (!err && response.statusCode == 200) {
                var obj = JSON.parse(body);
                obj = obj.content;
                utills.sendResponce(200, res, err, obj);
            }
        })

    });


};




