/**
 * Created by Chanaka Fernando on 1/5/2017.
 */
var utill = require('../../control/utills/utils');
var maogoose =require('mongoose');
var Schema =mongoose.Schema;
//=================================================================================


var adverteistment = new Schema({
    AddID     :{type:String,require:true,unique:true},
    ExDate    :{type:Date,require:true},
    DisPeriod :String,
    Audiance  :String,
    DueDate   :Date

});
var Adverteistment = mongoose.model('Adverteistment',adverteistment);
exports.Adverteistment=Adverteistment;

//================================================================================

var sponsor = new Schema({
    SID        :{type:String,require:true,unique:true},
    Name       :{
                   fName:{type:String,require:true},
                   lName:{type:String,require:true}
                },
    Email      :String,
    Tel_No     :String,
    ComName    :String
});
exports.Sponsor = mongoose.model('Sponsor',sponsor);

//===============================================================================



var admin = new Schema({
    //AdminID    :{type:String,require:true,unique:true},
    Name       :{
                fName:{type:String,require:true},
                lName:{type:String,require:true}
                },
    Email      :String,
    UserName   :{type:String,require:true,unique:true},
    PassWord   :{type:String,require:true},
    AdminType  :String

});
exports.Administrator= mongoose.model('Administrator',admin);
//==================================================================

var referencees =new Schema({
    BusID      :String,
    TrainID    :String,
    AdverID    :Number,
    GameID     :String,
    SponsorID  :String,
    Descrip    :String
});