
/* require dependecies */
const express = require("express");
const logger = require("morgan");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config");
const firebase = require("./firebase");
/* end require dependencies */

/* require routers */

const requestsRouter = require("./routes/requests");
const usersRouter = require("./routes/users");

/* end require routers */

// define app class
const app = express();

app.get("/", (req, res) => {
    console.log("hello");
    res.end("hello");
})
// use dependencies
app.use(logger("dev"));
app.use(methodOverride());
app.use(bodyParser.json());
app.use(cors());

// use routers
app.use("/requests", requestsRouter);
app.use("/users", usersRouter);
// end using routers

// listen for the port
app.listen(config.port);