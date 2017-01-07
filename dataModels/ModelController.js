/**
 * Created by Chanaka Fernando on 1/2/2017.
 */
var utill =require('../control/utills/utils');
var config =require('../app-configuration.json');
var busModels=require('./forBus/objectModelForBus');
var trainModels=require('./forTrain/objectModelForTrain');



module.exports.dbConnection=function () {


    //utill.logger('Successfully connected to '+config.DB_NAME+' database ',200);
    // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting (soucre) My credentials were invalid, it was giving 4, which I can't find in officials docs or anywhere else


    var mongoose = require( 'mongoose' );
    mongoose.Promise = global.Promise;
    if(mongoose.connection.readyState){
        return true;
    }else{
        mongoose.connect(config.DB_HOST+':'+config.DB_PORT+'/'+config.DB_NAME);

        // When successfully connected
        mongoose.connection.on('connected', function () {
            utill.logger('Mongoose default connection open ',200);
        });
        // If the connection throws an error
        mongoose.connection.on('error',function (err) {
            utill.logger('connection error:',500,err);
        });
        // When the connection is disconnected
        mongoose.connection.on('disconnected', function () {
            utill.logger('Mongoose default connection disconnected',500);
        });
        // If the Node process ends, close the Mongoose connection
        process.on('SIGINT', function() {
            mongoose.connection.close(function () {
                utill.logger('Mongoose default connection disconnected through app termination',200);
                process.exit(0);
            });
        });

    }
};








