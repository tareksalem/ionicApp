const express = require("express");
const router = express.Router();
const http = require("http");

// make a router for posting request data
router.post("/", (req, res) => {
    // make some stuff here
    var body = req.body;
    var userNumber = body.userref;
    var request = http.request({
            host: "jawalsms.net",
            path: encodeURI(`/httpSmsProvider.aspx?username=MgsalaCo&password=Project@2018&mobile=${userNumber}&unicode=E&message=رسالة تحقق&sender=MgsalaCo-AD`),
            port: 80,
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        }, function (response) {
        response.on("data", function (d) {
            var status = Number.parseInt(d.toString());
            if (status === 1010) {
                res.json({message: 'message sent successfully'});
            } else {
                res.json({message: 'error happened'});
            }
        })
    });
    request.end();
    request.on("error", function (err) {
        res.json({message: 'error happened'});
    })
})
module.exports = router;