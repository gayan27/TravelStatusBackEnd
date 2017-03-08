/**
 * Created by Chanaka Fernando on 1/16/2017.
 */
var utills = require('../../utills');
var collectionModel = require('../../dataModels/collectionModels');


module.exports.postMethods = function (app) {
    utills.logger(__dirname + "\\getRequest.js", 200);


    /**
     * this method will save the data came from admin, into database
     */
    app.post('/post/administrator', function (req, res) {
        utills.logger('sucessfully accessed ' + req.url, 200);
        utills.DBConnection();
        var newBus = new collectionModel.Buses({
            adminId        :req.body.adminID,
            name           :{
                fName:req.body.firstName,
                lName:req.body.lastName
            },
            eMail          :req.body.eMail,
            userName       :req.body.userName,
            adminPass      :req.body.password,
            telNo          :req.body.telNumber,
            adminType      :req.body.type
        });
        newBus.save(function (err) {
            if (err) {
                utills.logger("Document is not saved", 500, err);
            } else {
                utills.logger('Document is saved successfully', 200);
            }
        });
        res.end();

    });


    /**
     *this method will save the driver details came from admin, into database
     */
    app.post('/post/sponsor', function (req, res) {
        utills.logger('sucessfully accessed ' + req.url, 200);
        utills.DBConnection();
        var newSponsor = collectionModel.Sponsor({
            comName: req.body.companyName,
            name: {
                fName: req.body.firstName,
                lName: req.body.lastName
            },
            eMail: req.body.eMail,
            telNo: req.body.telNumber

        });
        newSponsor.save(function (err) {
            if (err) {
                utills.logger("Document is not saved", 500, err);
            } else {
                utills.logger('Document is saved successfully', 200);
            }
        });
        res.end();

    });


    /**
     *this method will save the Advertiestment details came from admin, into database
     */
    app.post('/post/Adverteistment', function (req, res) {
        utills.logger('sucessfully accessed ' + req.url, 200);
        utills.DBConnection();
        var newAdverteistment = collectionModel.Adverteistments ({
            comName: req.body.companyName,
            name: {
                fName: req.body.firstName,
                lName: req.body.lastName
            },
            eMail: req.body.eMail,
            telNo: req.body.telNumber

        });
        newAdverteistment.save(function (err) {
            if (err) {
                utills.logger("Document is not saved", 500, err);
            } else {
                utills.logger('Document is saved successfully', 200);
            }
        });
        res.end();

    });


    /**
     *this method will save the user details came from admin, into database
     */
    app.post('/post/User', function (req, res) {
        utills.logger('sucessfully accessed ' + req.url, 200);
        utills.DBConnection();
        var newUser = collectionModel.Users ({
            name        :{
                fname:req.body.firstName,
                lname:req.body.lastName
            },
            email       :req.body.eMail,
            telno       :req.body.telnumber,
            rank        :req.body.rank,
            point       :req.body.points,
            username    :req.body.userName,
            regDate     :req.body.regDate

        });
        newUser.save(function (err) {
            if (err) {
                utills.logger("Document is not saved", 500, err);
            } else {
                utills.logger('Document is saved successfully', 200);
            }
        });
        res.end();

    });


    /**
     *this method will save the user's comment came from admin, into database
     */
    app.post('/post/comment', function (req, res) {
        utills.logger('sucessfully accessed ' + req.url, 200);
        utills.DBConnection();
        var newComment = collectionModel.Users ({
            userName   :req.body.userName,
            texts      :req.body.message,
            imag       :req.body.photo,
            date       :req.body.currentDate,
            longitude  :req.body.longitude,
            latitude   :req.body.latitude,
            type       :req.body.type,
            transportId:req.body.transportId,
            route      :req.body.routeNumber

        });
        newComment.save(function (err) {
            if (err) {
                utills.logger("Document is not saved", 500, err);
            } else {
                utills.logger('Document is saved successfully', 200);
            }
        });
        res.end();

    });



    /**
     *this method will save the user details came from admin, into database
     */
    app.post('/post/comment', function (req, res) {
        utills.logger('sucessfully accessed ' + req.url, 200);
        utills.DBConnection();
        var newComment = collectionModel.Users ({
            userName   :req.body.userName,
            texts      :req.body.message,
            imag       :req.body.photo,
            date       :req.body.currentDate,
            longitude  :req.body.longitude,
            latitude   :req.body.latitude,
            type       :req.body.type,
            transportId:req.body.transportId,
            route      :req.body.routeNumber

        });
        newComment.save(function (err) {
            if (err) {
                utills.logger("Document is not saved", 500, err);
            } else {
                utills.logger('Document is saved successfully', 200);
            }
        });
        res.end();
    });

};

