/**
 * Created by Chanaka Fernando on 1/1/2017.
 */
var path =require('path');
var utill = require('../../utills/utils');
var config = require('../../../app-configuration.json');
var BusModel = require('../../../dataModels/forBus/objectModelForBus');
var dbUtills =require('../../../dataModels/ModelController');

//==============================================================================

var obj ={
    totalUsers :2550,
    totalSponsors:500,
    totalAdds:20,
    totalDrivers:452,
    totalConductors:45,
    totalBusses:458,
    lastWeekUsers:15,
    lastWeekSponsors:14,
    lastWeekAdds:80,
    lastWeekDrivers:10,
    lastWeekConductors:50 ,
    lastWeekBuses:50,
    time:"12th of january 2017",
    topCom1:"Virtusa",
    topCom2:"WSO2",
    topCom3:"Crowdireia",
    topCom4:"Enhanser",
    topCom5:"Pearson",
    topCom6:"Uniliver",
    topCom7:"UOM",
    topCom8:"UGC",
    topCom1Point:80,
    topCom2Point:60,
    topCom3Point:50,
    topCom4Point:45,
    topCom5Point:30,
    topCom6Point:20,
    topCom7Point:10,
    topCom8Point:5,
    topDriver1NTC:"NTC1020",
    topDriver2NTC:"NTC2000",
    topDriver3NTC:"NTC1540",
    topDriver4NTC:"NTC7852",
    topDriver5NTC:"NTC1452",
    topConductor1NTC:"NTC1782",
    topConductor2NTC:"NTC1702",
    topConductor3NTC:"NTC1140",
    topConductor4NTC:"NTC1455",
    topConductor5NTC:"NTC1002",
    topBusId1:"AA1000",
    topBusId2:"MT1450",
    topBusId3:"BB1250",
    topBusId4:"CD7896",
    topBusId5:"FG4582",
    topBusId1Points:100,
    topBusId2Points:80,
    topBusId3Points:70,
    topBusId4Points:60,
    topBusId5Points:10,
    topUser1 :"Chanaka",
    topUser2 :"Gayan",
    topUser3 :"Prasad",
    topUser4 :"Sanduni",
    topUser5 :"Danushika",
    topUser1Point:400,
    topUser2Point:300,
    topUser3Point:350,
    topUser4Point:200,
    topUser5Point:150,
    topUser6Point:100,

};

var profile ={
    adminName :"Chanaka",
    fName    : "Chanaka",
    lName    :"Fernando",
    adminPropic:"/app/img/propic.jpg",
    adminRole    :"Admin"

}




module.exports.forBusAPI=function(app){
    utill.logger(__dirname +'\\RequestsFromBus.js',200);



    //remove this onu teasy
	app.post('/register-sponsor',function(req,res){
		console.log(req.url);
		var object = req.body;
		console.log(req.body);
		console.log('============');
            res.status(200);
            res.json({status:200,masege:'ok',content:''});
	});


	//post a overview object
    app.get('/overview',function (req,res) {
        console.log(req.url);
        var object =JSON.stringify(obj);

        res.json(obj);
        console.log("done");

    });

    ///post a profile object
    app.get('/profile',function (req,res) {
        console.log(req.url);
        var object =JSON.stringify(profile);
        res.json(profile);
        console.log("profile done");
    });
	
	
	
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


