/**
 * Created by Gayan Sampath on 3/11/2017.
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
    utills.logger(__dirname + "\\getRequest.js", 200);

    /**
     * send a specific bus data by given drver NTC
     */
    app.post('/post/train', function (req, res) {
        utills.logger('successfully accessed ' + req.url, 200);
        request(config.TRAIN_SERVICE + '/post/train/', function (err, response, body) {
            if (!err && response.statusCode == 200) {
                var obj = JSON.parse(body);
                obj = obj.content;
                utills.sendResponce(200, res, err, obj);
            }
        })


    });



    /**
     * send a specific driver data by given drver NTC
     */
    app.post('/post/driver', function (req, res) {
        utills.logger('successfully accessed ' + req.url, 200);
        request(config.TRAIN_SERVICE + '/post/driver/', function (err, response, body) {
            if (!err && response.statusCode == 200) {
                var obj = JSON.parse(body);
                obj = obj.content;
                utills.sendResponce(200, res, err, obj);
            }
        })


    });





    /**
     * send a specific route data
     */
    app.post('/post/route', function (req, res) {
        utills.logger('successfully accessed ' + req.url, 200);
        request(config.BUS_SERVICE + '/post/route/', function (err, response, body) {
            if (!err && response.statusCode == 200) {
                var obj = JSON.parse(body);
                obj = obj.content;
                utills.sendResponce(200, res, err, obj);
            }
        })


    });

};