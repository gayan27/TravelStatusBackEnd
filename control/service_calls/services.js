/**
 * Created by Chanaka Fernando on 1/1/2017.
 */
var path = require('path');
var utill = require('../utills/utils');
var busService = require('./forBusAPI/RequestsFromBus');
var gameService = require('./forGameAPI/RequestsFromGame');
var trainServices =require('./forTrainAPI/trainRequests');


module.exports.serviceCalls=function (app) {
    utill.logger(__dirname+"\\services.js",200);
    busService.forBusAPI(app);
    gameService.forGameAPI(app);
    trainServices.forTrainAPI(app);




};
