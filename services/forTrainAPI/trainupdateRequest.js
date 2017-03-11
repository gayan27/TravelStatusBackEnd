/**
 * Created by Gayan Sampath on 3/11/2017.
 */


var utills = require('../../utills');
var path = require('path');
var request = require('request');
var collectionModels = require('../../dataModels/collectionModels');
var config = require('../../app-config.json');


/**
 * all the post requesst relevent to the TRAINscheduleAPI, from the user, is handled here
 * @param app
 */
module.exports.getMethods = function (app) {
    utills.logger(__dirname + "\\updateRequest.js", 200);



    /**
     * send a specific train data by given bus NTC
     */
    app.post('/update/train/:trainId', function (req, res) {
        utills.logger('successfully accessed ' + req.url, 200);
        var trainId = req.body.trainId;
        request(config.TRAIN_SERVICE + '/update/train/'+ trainId, function (err, response, body) {
            if (!err && response.statusCode == 200) {
                var obj = JSON.parse(body);
                obj = obj.content;
                utills.sendResponce(200, res, err, obj);
            }
        })


    });




    /**
     * send a specific driver data by given driver NTC
     */
    app.post('/update/driver/:ntc', function (req, res) {
        utills.logger('successfully accessed ' + req.url, 200);
        var ntc = req.body.ntc;
        request(config.TRAIN_SERVICE + '/update/driver/'+ ntc, function (err, response, body) {
            if (!err && response.statusCode == 200) {
                var obj = JSON.parse(body);
                obj = obj.content;
                utills.sendResponce(200, res, err, obj);
            }
        })


    });




    /**
     * send a specific route data by given route no
     */
    app.post('/update/route/:routes', function (req, res) {
        utills.logger('successfully accessed ' + req.url, 200);
        var routes = req.body.routes;
        request(config.TRAIN_SERVICE + '/update/route/'+ routes, function (err, response, body) {
            if (!err && response.statusCode == 200) {
                var obj = JSON.parse(body);
                obj = obj.content;
                utills.sendResponce(200, res, err, obj);
            }
        })


    });


};