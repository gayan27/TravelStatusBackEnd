/**
 * Created by Chanaka Fernando on 3/4/2017.
 * @email : nuwan.c.fernando@gmail.com
 */

var utills = require('../../utills');
var config = require('../../app-config.json');
var collectionModels = require('../../dataModels/collectionModels');


/***
 * this section is responsible for the game
 * @param app
 */
module.exports.getMethods = function(app){
    utills.logger(__dirname + "\\getRequest.js", 200);


    /**
     * to get all game profiles as a list
     */
    app.get('/get/game/all-users',function (req,res) {
        var project ={
            password :false,
        };
        var sort = {
            sort: {level: 1,maxScore:1}
        };
        collectionModels.GameProfiles.find({},project,sort, function (err, gameProfiles) {
            if (err) {
                utills.logger("error occured :", 500, err);
                utills.sendResponce(500,res,err);
            } else {
                utills.logger("succesfuly send the game profile list", 200);
                utills.sendResponce(200,res,err,gameProfiles);
            }
        });
    });

    /**
     * This method is responsible for search a specific user id
     */
    app.get('/get/game/user/:un',function (req,res) {
        var selection ={
            userName : req.params.un
        };
        var projection ={
            password :false
        };
        var sort = {
            sort: {level: 1,maxScore:1}
        };
        collectionModels.GameProfiles.find(selection,projection,sort, function (err, gameProfile) {
            if (err) {
                utills.logger("error occured :", 500, err);
                utills.sendResponce(500,res,err);
            } else {
                utills.logger("succesfuly send the game profile list", 200);
                utills.sendResponce(200,res,err,gameProfile);
            }
        });
    });



};
