/**
 * Created by Chanaka Fernando on 2/21/2017.
 * @email nuwan.c.fernando@gmail.com
 */

var utills = require('../../utills');
var path = require('path');
var collectionModels = require('../../dataModels/collectionModels');
var config = require('../../app-config.json');
var request = require('request');
//topcompa 8
//top diver 5



/**
 * all the get request to backend from the user, is handled here
 * @param app
 */
module.exports.getMethods = function (app) {
    utills.logger(__dirname + "\\getRequest.js", 200);

    /**
     * send a index file of the Backend api
     */
    app.get('/', function (req, res) {
        utills.logger("successfully accessed " + req.url, 200);
        res.sendFile(path.join(__dirname, '../../views', 'index.html'));
        res.status(200);
        utills.logger("successfully send the index.html file", 200);
    });



    //testing purpose
    var obj={

    };
    app.post('/android', function (req, res) {
        utills.logger("successfully accessed " + req.url, 200);
        //res.sendFile(path.join(__dirname, '../../views', 'index.html'));
        //res.status(200);
        console.log(req.body);
        console.log(req.params.username);
        res.status(200).send({
            Name :"Chanaka",
            Age  :"1222",
            Mobile: "014444"
        });
        utills.logger("successfully send the index.html file", 200);
    });


    /**
     * this method will return an addverteistment detaill by its Id
     */
    app.get('/get/add/:id',function (req,res) {
        utills.logger("successfuly accesed " + req.url, 200);
        utills.DBConnection();
        var selection ={
            _id: req.params.id
        };
        var Projection = {
            _id :false,
            __v: false

        };
        collectionModels.Adverteistments.find(selection, Projection, function (err, addList) {
            if (err) {
                utills.logger("error occured :", 500, err);
                utills.sendResponce(500,res,err);
            } else {
                utills.logger("succesfuly send the addverteistment list", 200);
                utills.sendResponce(200,res,'',addList);
            }
        });
    });


    /**
     * this method will return a sponsor details
     */
    app.get('/get/sponsors/:comName',function (req,res) {
        utills.logger("successfuly accesed " + req.url, 200);
        utills.DBConnection();
        var selection ={
            comName : req.params.comName
        };
        var Projection = {
            __v: false,
            _id: true
        };
        collectionModels.Sponsor.find(selection, Projection, function (err, SponsorList) {
            if (err) {
                utills.logger("error occured :", 500, err);
                utills.sendResponce(500,res,err);
            } else {
                utills.logger("succesfuly send the sponsor list", 200);
                utills.sendResponce(200,res,'',SponsorList);
            }
        });
    });


    /**
     * this method will return a specific user details
     */
    app.get('/get/user/:username',function (req,res) {
        utills.logger("successfuly accesed " + req.url, 200);
        utills.DBConnection();
        var selection ={
            comName : req.params.comName
        };
        var Projection = {
            __v: false,
            _id: true
        };
        collectionModels.Users.find(selection, Projection, function (err, user) {
            if (err) {
                utills.logger("error occured :", 500, err);
                utills.sendResponce(500,res,err);
            } else {
                utills.logger("succesfuly send the sponsor list", 200);
                utills.sendResponce(200,res,'',user);
            }
        });
    });


    /**
     * this method will return adverteistmet to be validation
     */
    app.get('/get/all-adds',function (req,res) {
            utills.logger("successfuly accesed " + req.url, 200);
            utills.DBConnection();
        var selection = {
            valid : false
        };
        var Projection = {
            __v: false

        };
            collectionModels.Adverteistment.find(selection, Projection, function (err, addList) {
                if (err) {
                    utills.logger("error occured :", 500, err);
                    utills.sendResponce(500,res,err);
                } else {
                    utills.logger("succesfuly send the addverteistment list", 200);
                    utills.sendResponce(200,res,'',addList);
                }
            });
    });


    /**
     * return all the sponsor list sorted by rank
     */
    app.get('/get/all-sponsors',function (req,res) {
        utills.logger("successfuly accesed " + req.url, 200);
        utills.DBConnection();
        var Projection = {
            __v: false,
            _id: false
        };
        collectionModels.Sponsor.find({}, Projection, function (err, SponsorList) {
            if (err) {
                utills.logger("error occured :", 500, err);
                utills.sendResponce(500,res,err);
            } else {
                utills.logger("succesfuly send the sponsor list", 200);
                utills.sendResponce(200,res,'',SponsorList);
            }
        });
    });



    /**
     * return all the userd list sorted by rank
     */
    app.get('/get/all-users',function (req,res) {
        utills.logger("successfuly accesed " + req.url, 200);
        utills.DBConnection();
        var Projection = {
            __v: false,
            _id: false
        };
        collectionModels.Users.find({}, Projection, function (err, userList) {
            if (err) {
                utills.logger("error occured :", 500, err);
                utills.sendResponce(500,res,err);
            } else {
                utills.logger("succesfuly send the sponsor list", 200);
                utills.sendResponce(200,res,'',userList);
            }
        });
    });


    /**
     * send sumarry in json format, listed in the database
     */
    var object={
        totalUsers :0,
        totalSponsors:0,
        totalAdds:0,
        totalDrivers:0,
        totalConductors:0,
        totalBuses:0,
        lastWeekUsers:50,
        lastWeekSponsors:7,
        lastWeekAdds:5,
        lastWeekDrivers:15,
        lastWeekConductors:15 ,
        lastWeekBuses:5,
        time:new Date(),
        topSponsors :'',
        topDriver :'',
        topConductor :'',
        topBus :'',
        topUsers:''
    };

    app.get('/get/overView', function (req, res) {
        utills.logger("successfuly accesed " + req.url, 200);
        utills.DBConnection();
        request(config.BUS_SERVICE + '/get/summary', function (err, response, body) {
            if (!err && response.statusCode == 200) {
                var obj = JSON.parse(body);
                object.topBus =obj.content.Buses;
                object.topDriver = obj.content.Drivers;
                object.topConductor=obj.content.Conductors;
                //console.log(obj);
            }
        });
        request(config.BUS_SERVICE+'/get/all-bus', function (err, response, body) {
            if (!err && response.statusCode == 200) {
                var obj = JSON.parse(body);
                obj = obj.content.length;
                object.totalBuses = obj;

            }
        })

        request(config.BUS_SERVICE+'/get/all-conductor', function (err, response, body) {
            if (!err && response.statusCode == 200) {
                var obj = JSON.parse(body);
                obj = obj.content.length;
                object.totalConductors= obj;

            }
        });
        request(config.BUS_SERVICE+'/get/all-driver', function (err, response, body) {
            if (!err && response.statusCode == 200) {
                var obj = JSON.parse(body);
                obj = obj.content.length;
                object.totalDrivers = obj;

            }
        });


        collectionModels.Adverteistments.find({},{}, function (err, addList) {
            if (err) {
                utills.logger("error occured :", 500, err);
            } else {
                utills.logger("succesfuly send the addverteistment list", 200);
                object.totalAdds =addList.length;
            }
        });

        collectionModels.Sponsors.find({},{}, function (err, addList) {
            if (err) {
                utills.logger("error occured :", 500, err);
            } else {
                utills.logger("succesfuly send the totSponsor ", 200);
                object.totalSponsors =addList.length;
            }
        });
        collectionModels.Users.find({},{}, function (err, addList) {
            if (err) {
                utills.logger("error occured :", 500, err);
            } else {
                utills.logger("succesfuly send the tot users", 200);
                object.totalUsers = addList.length;
            }

        });


            var Projection = {
                __v: false,
                _id: false,
                name    :false,
                eMail      :false,
                telNo      :false,
            };
            var sort = {
                skip: 0,
                limit: 5,
                sort: {points: 1}
            };
            collectionModels.Sponsors.find({}, Projection,sort, function (err, SponsorList) {
                if (err) {
                    utills.logger("error occured :", 500, err);
                } else {
                    utills.logger("succesfuly send the sponsor list", 200);
                    object.topSponsors =SponsorList;
                }
            });


        var Projection = {
            __v: false,
            _id: false,
            name     :false,
            email       :false,
            telno       :false,
            rank        :false,
            regdate     :false
        };
        var sort = {
            skip: 0,
            limit: 5,
            sort: {rewardpoint: 1}
        };
        collectionModels.Users.find({}, Projection,sort, function (err, UserList) {
            if (err) {
                utills.logger("error occured :", 500, err);
            } else {
                utills.logger("succesfuly send the sponsor list", 200);
                object.topUsers =UserList;
            }

            console.log(object);
            console.log("Successfully send the overview",200);
            utills.sendResponce(200,res,err,object);
        });


    });








};