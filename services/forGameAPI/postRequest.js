/**
 * Created by Chanaka Fernando on 3/4/2017.
 * @email : nuwan.c.fernando@gmail.com
 */

var utills = require('../../utills');
var config = require('../../app-config.json');
var collectionModels = require('../../dataModels/collectionModels');


/**
 * this section is responsible for the game
 * @param app
 */
module.exports.postMethods = function(app){
    utills.logger(__dirname + "\\getRequest.js", 200);

    /**
     * To provide authonication to the game app
     */
    app.post('/get/auth/game',function (req,res) {
        utills.logger('successfully acced authonication ',200);
        utills.DBConnection();

        var body = req.body;
        console.log(body);
        var selection ={
            userName :req.body.userName
        };
        collectionModels.GameProfiles.find(selection,{},{}, function (err, auth) {
            if (err) {
                utills.logger("error occured :", 500, err);
                res.setHeader('Content-Type', 'application/json');
                res.status(404).send({status: 404, message: "false"});
            } else if(auth){
                utills.logger("succesfuly send the game profile list", 200);
                res.setHeader('Content-Type', 'application/json');
                res.status(200).send({status: 200, message: "success"});
            }
        });
        res.end();

    })




};
