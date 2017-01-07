/**
 * Created by Chanaka Fernando on 1/2/2017.
 */
var utill = require('../../control/utills/utils');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//===================================================================
var train = new Schema({
    TID       :{type:String,require:true,unique:true},
    Name      :String,
    //DID       :String,
    RouteNo   :String,
    TrainType :String
});
exports.Train=mongoose.model('Train',train);




//===================================================================
/*
var trainDriver = new Schema({
    NIC       :{type:String, required:true},
    NTC       :{type:String, required:true},
    Name      :{
        fName:String,
        lName:String
    },
    DOB       :Date,
    Tel_No    :Number,
    Add       :String
});
exports.TrainDriver = mongoose.model('TrainDriver',trainDriver);

*/

//==================================================================






