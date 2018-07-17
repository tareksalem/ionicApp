const express = require("express");
const router = express.Router();
const http = require("http");
const firebase = require("../firebase");
const database = firebase.database();

// make a router for posting request data
router.post("/", (req, res) => {
    // make some stuff here
    var body = req.body;
    var userref = body.userref || "";
    var R_time = body.R_time || "";
    var R_date = body.R_date || "";
    var D_date = body.D_date || "";
    var D_time = body.D_time || "";
    var R_shift = body.R_shift || "";
    var D_shift = body.D_shift || "";
    var service = body.service || {};
    var timeStamp = body.timeStamp || "";
    var MapLongitude = body.MapLongitude || "";
    var MapLatitude = body.MapLatitude || "";
    var Notes = body.Notes || "";
    var request = http.request({
            host: "jawalsms.net",
            path: encodeURI(`/httpSmsProvider.aspx?username=MgsalaCo&password=Project@2018&mobile=${userref}&unicode=E&message=رسالة تحقق&sender=MgsalaCo-AD`),
            port: 80,
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        }, function (response) {
        response.on("data", function (d) {
            var status = Number.parseInt(d.toString());
            if (status === 1010) {
                // save data to firebase
                database.ref("/requests/" + `-${Math.random().toString(36).substr(2, 30)}${Math.random().toString(36).substr(2, 30)}`).set({
                    userref: userref,
                    R_date: R_date,
                    D_date: D_date,
                    R_time: R_time,
                    D_time: D_time,
                    D_shift: D_shift,
                    R_shift: R_shift,
                    service: service,
                    MapLatitude: MapLatitude,
                    MapLongitude: MapLongitude,
                    Notes: Notes
                })
                return res.json({message: 'message sent successfully'});
            } else {
                return res.json({message: 'error happened'});
            }
        })
    });
    request.end();
    request.on("error", function (err) {
        res.json({message: 'error happened'});
    })
})
module.exports = router;