/**
 * Created by Chanaka Fernando on 3/11/2017.
 */


var utills = require('../../utills');
var path = require('path');
var request = require('request');
var collectionModels = require('../../dataModels/collectionModels');
var config = require('../../app-config.json');


/**
 * all the post requesst relevent to the BUSscheduleAPI, from the user, is handled here
 * @param app
 */
module.exports.getMethods = function (app) {
    utills.logger(__dirname + "\\updateRequest.js", 200);



    /**
     * send a specific bus data by given bus NTC
     */
    app.post('/update/bus/:busId', function (req, res) {
        utills.logger('successfully accessed ' + req.url, 200);
        var busId = req.body.busId;
        request(config.BUS_SERVICE + '/update/bus/'+ busId, function (err, response, body) {
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
        request(config.BUS_SERVICE + '/update/driver/'+ ntc, function (err, response, body) {
            if (!err && response.statusCode == 200) {
                var obj = JSON.parse(body);
                obj = obj.content;
                utills.sendResponce(200, res, err, obj);
            }
        })


    });



    /**
     * send a specific conductor data by given conductor NTC
     */
    app.post('/update/conductor/:ntc', function (req, res) {
        utills.logger('successfully accessed ' + req.url, 200);
        var ntc = req.body.ntc;
        request(config.BUS_SERVICE + '/update/conductor/'+ ntc, function (err, response, body) {
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
        request(config.BUS_SERVICE + '/update/route/'+ routes, function (err, response, body) {
            if (!err && response.statusCode == 200) {
                var obj = JSON.parse(body);
                obj = obj.content;
                utills.sendResponce(200, res, err, obj);
            }
        })


    });


};