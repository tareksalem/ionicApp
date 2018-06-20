/* require dependencies */
const firebase = require("firebase");
const config = require("./config");
/* end require depenedencies */

firebase.initializeApp(config.firebaseConfig);

module.exports = firebase;