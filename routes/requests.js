const express = require("express");
const router = express.Router();

// make a router for posting request data
router.post("/", (req, res) => {
    // make some stuff here
    console.log(req.body);
    res.json({message: "test"})

    
})
module.exports = router;