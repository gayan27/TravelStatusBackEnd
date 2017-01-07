/**
 * Created by Chanaka Fernando on 1/2/2017.
 */
var utill = require('../../control/utills/utils');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;


//====================================================

//====================================================

var bus =new Schema({
    ID        :{type:String, required:true,unique:true},
    D_NTC     :{type:String, required:true},
    C_NTC     :{type:String, required:true},
    RouteNo   :{type:String, required:true},
    BusType   :String,
    Rank      :Number
});
var Buses = mongoose.model('Buses',bus);
exports.Buses = Buses;

//=====================================================

var conductor=new Schema({
    NIC       :{type:String, required:true,unique:true},
    NTC       :{type:String, required:true,unique:true},
    Name      :{
                fName:String,
                lName:String
               },
    DOB       :Date,
    Tel_No    :String,
    Add       :String
});
var Conductors=mongoose.model('Conductors',conductor);
exports.Conductors =Conductors;

//=====================================================

var driver = new Schema({
    NIC       :{type:String, required:true,unique:true},
    NTC       :{type:String, required:true,unique:true},
    Name      :{
                fName:String,
                lName:String
                },
    DOB       :Date,
    Tel_No    :String,
    Add       :String
});
exports.Driver = mongoose.model('Driver',driver);




//======================================================
    var busSchedule = new Schema({
        BID       :{type:String, required:true},
        RouteNo   :{type:String, required:true},
       // AdminID   :{type:String, required:true},
        StopPoints:
            [
                {
                    Pl   :String,
                    T    :String
                },
                {
                    Pl   :String,
                    T     :String
                },
                {
                    Pl   :String,
                    T    :String
                },
                {
                    Pl   :String,
                    T    :String
                },
                {
                    Pl   :String,
                    T    :String
                },
                {
                    Pl   :String,
                    T    :String
                },
                {
                    Pl   :String,
                    T    :String
                },
                {
                    Pl   :String,
                    T    :String
                },
                {
                    Pl   :String,
                    T    :String
                },
                {
                    Pl   :String,
                    T    :String
                },
                {
                    Pl   :String,
                    T    :String
                },
                {
                    Pl   :String,
                    T    :String
                },
                {
                    Pl   :String,
                    T    :String
                },
                {
                    Pl   :String,
                    T    :String
                },
                {
                    Pl   :String,
                    T    :String
                }

            ],
    });
exports.BusSchedule= mongoose.model('BusSchedule',busSchedule);
//==================================================================


