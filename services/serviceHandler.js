/**
 * Created by Chanaka Fernando on 2/21/2017.
 * @email nuwan.c.fernando@gmail.com
 */

var utills = require('../utills');

var backEndGetRequests  = require('./EndPoints/getRequests');
var backEndPostRequests = require('./EndPoints/postRequests');
var backEndUpdateRequests = require('./EndPoints/updateRequests');

var busScheduleAPI = require('./forBusAPI/getRequest');



module.exports.services = function(app){
    utills.logger('Ready to exicute backend services',200);


    backEndGetRequests.getMethods(app);
    //backEndPostRequests.postMethods(app);

    busScheduleAPI.getMethods(app);

};