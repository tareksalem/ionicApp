const express = require("express");
const router = express.Router();
const http = require("http");

// make a router for posting request data
router.post("/", (req, res) => {
    // make some stuff here
    var data = req.data;
    var userNumber = data.userref;

    var request = http.request({
            host: "jawalsms.net",
            path: `/httpSmsProvider.aspx?username=MgsalaCo&password=Project@2018&mobile=${userNumber}&unicode=E&message=رسالة تحقق&sender=MgsalaCo-ADg`,
            port: 80,
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        }, function (res) {
        res.on("data", function (d) {
            console.log(d.toString());
        })
    });
    request.end();
    request.on("error", function (err) {
        console.log("error is", err);
    })

})
module.exports = router;