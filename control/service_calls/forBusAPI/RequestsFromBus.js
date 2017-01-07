/**
 * Created by Chanaka Fernando on 1/1/2017.
 */
var path =require('path');
var utill = require('../../utills/utils');
var config = require('../../../app-configuration.json');
var BusModel = require('../../../dataModels/forBus/objectModelForBus');
var dbUtills =require('../../../dataModels/ModelController');
//==============================================================================





module.exports.forBusAPI=function(app){
    utill.logger(__dirname +'\\RequestsFromBus.js',200);




    app.get('/bus-api', function (req, res) {
        res.sendFile(path.join(__dirname, '../../../views', '/index.html'));
        res.status(200);
        utill.logger("successfully send index.html",200);
        res.end();
    });

    //==================================================================
    app.get('/bus-api/form/bus', function (req, res) {
        res.sendFile(path.join(__dirname, '../../../views', '/postBus.html'));
        res.status(200);
        utill.logger("successfully send postBusform.html",200);

    });

    //=========================================================================

    app.post('/bus-api/post/bus',function(req,res){
        utill.logger('sucessfully accessed '+req.url,200);

        dbUtills.dbConnection();

        var newBus = new BusModel.Buses({
            ID        :req.body.busId,
            D_NTC     :req.body.driverNTC,
            C_NTC     :req.body.conductorNTC,
            RouteNo   :req.body.routeNo,
            Type      :req.body.busType,
            Rank      :req.body.busRank
        });
        newBus.save(function(err){
            if(err){
                utill.logger("Document is not saved",500,err);
            }else{
                utill.logger('Document is saved successfully',200);
            }
        });
        res.end();

    });

    //==================================================================
    app.get('/bus-api/form/driver', function (req, res) {
        res.sendFile(path.join(__dirname, '../../../views', '/postDriver.html'));
        res.status(200);
        utill.logger("successfully send postBus form.html",200);

    });
    //==================================================================

    app.post('/bus-api/post/driver',function (req,res) {
        utill.logger('sucessfully accessed '+req.url,200);

        dbUtills.dbConnection();
        var newDriver =BusModel.Driver({
            NIC       :req.body.driverNIC,
            NTC       :req.body.driverNTC,
            Name      :{
                        fName:req.body.driverFName,
                        lName:req.body.driverLName
                       },
            DOB       :req.body.driverDOB,
            Tel_No    :req.body.driverTP,
            Add       :req.body.driverAddress
        });
        newDriver.save(function (err) {
            if(err){
                utill.logger("Document is not saved",500,err);
            }else{
                utill.logger('Document is saved successfully',200);
            }
        });
        res.end();
    });
    //===============================================================================
    app.get('/bus-api/form/conductor', function (req, res) {
        res.sendFile(path.join(__dirname, '../../../views', '/postConductor.html'));
        res.status(200);
        utill.logger("successfully send postConductorform.html",200);

    });
    //==============================================================================
    app.post('/bus-api/post/conductor',function (req,res) {
        utill.logger('sucessfully accessed '+req.url,200);

        dbUtills.dbConnection();
        var newConductor = BusModel.Conductors({
            NIC       :req.body.conductorNIC,
            NTC       :req.body.conductorNTC,
            Name      :{
                fName:req.body.conductorFName,
                lName:req.body.conductorLName
            },
            DOB       :req.body.conductorDOB,
            Tel_No    :req.body.conductorTP,
            Add       :req.body.conductorAddress
        });
        newConductor.save(function (err) {
            if(err){
                utill.logger("Document is not saved",500,err);
            }else{
                utill.logger('Document is saved successfully',200);
            }
        });
        res.end();
    });
    //===========================================================




    app.post('/bus-api/post/schedule',function (req,res) {
        utill.logger('sucessfully accessed '+req.url,200);

        dbUtills.dbConnection();
        var newSchedule = new BusModel.schedule({
            BID       :req.body.busId,
            RouteNo   :req.body.routeNo,
            StopPoints:
                [
                    {
                        Pl   :req.body.sp1,
                        T    :req.body.spt1
                    },
                    {
                        Pl   :req.body.sp2,
                        T    :req.body.spt2
                    },
                    {
                        Pl   :req.body.sp3,
                        T    :req.body.spt3
                    },
                    {
                        Pl   :req.body.sp4,
                        T    :req.body.spt4
                    },
                    {
                        Pl   :req.body.sp5,
                        T    :req.body.spt5
                    },
                    {
                        Pl   :req.body.sp6,
                        T    :req.body.spt6
                    },
                    {
                        Pl   :req.body.sp7,
                        T    :req.body.spt7
                    },
                    {
                        Pl   :req.body.sp8,
                        T    :req.body.spt8
                    },
                    {
                        Pl   :req.body.sp9,
                        T    :req.body.spt9
                    },
                    {
                        Pl   :req.body.sp10,
                        T    :req.body.spt10
                    },
                    {
                        Pl   :req.body.sp11,
                        T    :req.body.spt11
                    },
                    {
                        Pl   :req.body.sp12,
                        T    :req.body.spt12
                    },
                    {
                        Pl   :req.body.sp13,
                        T    :req.body.spt13
                    },
                    {
                        Pl   :req.body.sp14,
                        T    :req.body.spt14
                    },
                    {
                        Pl   :req.body.sp15,
                        T    :req.body.spt15
                    }
                ],

        });
        newSchedule.save(function (err) {
            if(err){
                utill.logger("Document is not saved",500,err);
            }else{
                utill.logger('Document is saved successfully',200);
            }
        });
        res.end();

    });



};


