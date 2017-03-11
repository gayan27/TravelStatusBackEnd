/**
 * Created by Chanaka Fernando on 3/4/2017.
 * @email : nuwan.c.fernando@gmail.com
 */

var utills = require('../../utills');
var config = require('../../app-config.json');
var collectionModel = require('../../dataModels/collectionModels');


/**
 * this section is responsible for the game
 * @param app
 */
module.exports.updateMethods = function(app){
    utills.logger(__dirname + "\\getRequest.js", 200);

    /**
     * To provide authonication to the game app
     */
    app.post('/get/update/game-score',function (req,res) {
    utills.logger('successfully acced authonication ',200);
    utills.DBConnection();

        var selection ={
            userName :req.body.userName
        };

        var update ={
            maxScore :req.body.maxScore,
            level    :req.body.level
        };

        var options = {
            new:true,
            projection:{_id: false,__v:false,password:false},
            maxTimeMS: 300
        };

        collectionModel.GameProfiles.findOneAndUpdate(selection,update,options,function (err,list) {
            if(err){
                utills.logger("Document is not saved", 500, err);
                utills.sendResponce(500,res,err);
            }else {
                utills.logger('Document is saved successfully', 200);
                utills.sendResponce(200,res,err,list);
            }
        });
    });

    app.post('/get/update/game/points',function (req,res) {
        utills.logger('successfully acced authonication ',200);
        utills.DBConnection();

        var selection ={
            userName :req.body.userName
        };

        var update ={
            points   :req.body.points
        };

        var options = {
            new:true,
            projection:{_id: false,__v:false,password:false},
            maxTimeMS: 300
        };

        collectionModel.GameProfiles.findOneAndUpdate(selection,update,options,function (err,list) {
            if(err){
                utills.logger("Document is not saved", 500, err);
                utills.sendResponce(500,res,err);
            }else {
                utills.logger('Document is saved successfully', 200);
                utills.sendResponce(200,res,err,list);
            }
        });
    });



};