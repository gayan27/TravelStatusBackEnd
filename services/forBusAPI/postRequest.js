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
module.exports.postMethods = function (app) {
    utills.logger(__dirname + "\\postRequest.js", 200);

    /**
     * send a specific bus data by given drver NTC
     */
    app.post('/post/bus', function (req, res) {
        utills.logger('successfully accessed ' + req.url, 200);


        var postData = req.body;
        console.log(req.body);

        var url = '127.0.0.1:3000/post/bus';
        var options = {
            method: 'post',
            body: postData,
            json: true,
            url: url
        };
        request(options, function (err, res, body) {
            if (err) {
                console.error('error posting json: ', err)
                throw err
            }
            var headers = res.headers;
            var statusCode = res.statusCode;
            console.log('headers: ', headers);
            console.log('statusCode: ', statusCode);
            console.log('body: ', body);
        });

    });













    /**
     * send a specific driver data by given drver NTC
     */
    app.post('/post/driver', function (req, res) {
        utills.logger('successfully accessed ' + req.url, 200);
        request.post(config.BUS_SERVICE + '/post/driver', function (err, response, body) {
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
    app.post('/post/conductor', function (req, res) {
        utills.logger('successfully accessed ' + req.url, 200);
        request(config.BUS_SERVICE + '/post/conductor/', function (err, response, body) {
            if (!err && response.statusCode == 200) {
                var obj = JSON.parse(body);
                obj = obj.content;
                utills.sendResponce(200, res, err, obj);
            }
        })


    });


    /**
     * send a specific schedule data
     */
    app.post('/post/schedule', function (req, res) {
        utills.logger('successfully accessed ' + req.url, 200);
        request(config.BUS_SERVICE + '/post/schedule/', function (err, response, body) {
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