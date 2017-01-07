/**
 * Created by Chanaka Fernando on 1/2/2017.
 */
var path =require('path');
var utill = require('../../utills/utils');
var config = require('../../../app-configuration.json');
var BusModel = require('../../../dataModels/forGame/objectModelForGame');
var dbUtills =require('../../../dataModels/ModelController');
//==============================================================================


module.exports.forGameAPI=function (app) {
    utill.logger(__dirname+'\\RequestsFromGame.js',200);

    app.get('/game_api',function(req,res){
        res.sendFile(path.join(__dirname ,'../../../views','gameIndex.html'));
        utill.logger('successfully send gameIndex.html',200);
    });

};


