/**
 * Created by Chanaka Fernando on 2/21/2017.
 * @email nuwan.c.fernando@gmail.com
 */

var utills = require('../utills');

var backEndGetRequests  = require('./EndPoints/getRequests');
var backEndPostRequests = require('./EndPoints/postRequests');
var backEndUpdateRequests = require('./EndPoints/updateRequests');

var busAPIGetRequest = require('./forBusAPI/getRequest');
var busAPIPostRequest = require('./forBusAPI/postRequest');



module.exports.services = function(app){
    utills.logger('Ready to exicute backend services',200);


    //EndPoints
    backEndGetRequests.getMethods(app);
    backEndPostRequests.postMethods(app);


    //forBusAPI
    busAPIGetRequest.getMethods(app);
    busAPIPostRequest.postMethods(app);




};