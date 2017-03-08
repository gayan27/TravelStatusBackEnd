/**
 * Created by Chanaka Fernando on 2/21/2017.
 * @email nuwan.c.fernando@gmail.com
 */

var utills = require('../../utills');
var path = require('path');
var collectionModels = require('../../dataModels/collectionModels');

/**
 * all the get request to backend from the user, is handled here
 * @param app
 */
module.exports.getMethods = function (app) {
    utills.logger(__dirname + "\\getRequest.js", 200);

    /**
     * send a index file of the Backend api
     */
    app.get('/', function (req, res) {
        utills.logger("successfully accessed " + req.url, 200);
        res.sendFile(path.join(__dirname, '../../views', 'index.html'));
        res.status(200);
        utills.logger("successfully send the index.html file", 200);
    });


    /**
     * this method will return an addverteistment detaill by its Id
     */
    app.get('/get/add/:id',function (req,res) {
        utills.logger("successfuly accesed " + req.url, 200);
        utills.DBConnection();
        var selection ={
            _id: req.params.id
        };
        var Projection = {
            _id :false,
            __v: false

        };
        collectionModels.Adverteistment.find(selection, Projection, function (err, addList) {
            if (err) {
                utills.logger("error occured :", 500, err);
                utills.sendResponce(500,res,err);
            } else {
                utills.logger("succesfuly send the addverteistment list", 200);
                utills.sendResponce(200,res,'',addList);
            }
        });
    });


    /**
     * this method will return a sponsor details
     */
    app.get('/get/sponsors/:comName',function (req,res) {
        utills.logger("successfuly accesed " + req.url, 200);
        utills.DBConnection();
        var selection ={
            comName : req.params.comName
        };
        var Projection = {
            __v: false,
            _id: true
        };
        collectionModels.Sponsor.find(selection, Projection, function (err, SponsorList) {
            if (err) {
                utills.logger("error occured :", 500, err);
                utills.sendResponce(500,res,err);
            } else {
                utills.logger("succesfuly send the sponsor list", 200);
                utills.sendResponce(200,res,'',SponsorList);
            }
        });
    });

    /**
     * this method will return adverteistmet to be validation
     */
    app.get('/get/all-adds',function (req,res) {
            utills.logger("successfuly accesed " + req.url, 200);
            utills.DBConnection();
        var selection = {
            valid : false
        };
        var Projection = {
            __v: false

        };
            collectionModels.Adverteistment.find(selection, Projection, function (err, addList) {
                if (err) {
                    utills.logger("error occured :", 500, err);
                    utills.sendResponce(500,res,err);
                } else {
                    utills.logger("succesfuly send the addverteistment list", 200);
                    utills.sendResponce(200,res,'',addList);
                }
            });
    });


    /**
     * return all the sponsor list sorted by rank
     */
    app.get('/get/all-sponsors',function (req,res) {
        utills.logger("successfuly accesed " + req.url, 200);
        utills.DBConnection();
        var Projection = {
            __v: false,
            _id: false
        };
        collectionModels.Sponsor.find({}, Projection, function (err, SponsorList) {
            if (err) {
                utills.logger("error occured :", 500, err);
                utills.sendResponce(500,res,err);
            } else {
                utills.logger("succesfuly send the sponsor list", 200);
                utills.sendResponce(200,res,'',SponsorList);
            }
        });
    });



};