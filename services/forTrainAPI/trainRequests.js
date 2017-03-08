/**
 * Created by Chanaka Fernando on 1/2/2017.
 */
var path =require('path');
var utill = require('../../utills/utils');
var config = require('../../../app-config.json');
var BusModel = require('../../../dataModels/forTrain/objectModelForTrain');
var dbUtills =require('../../../dataModels/ModelController');
//=======================================================================


module.exports.forTrainAPI =function (app) {
    utill.logger(__dirname +'\\trainRequest.js',200);

    app.get('/train_api',function (req,res){
        res.sendFile(path.join(__dirname,'../../../views','trainIndex.html'));
        utill.logger('successfully send trainIndex.html',200);
    });
};


