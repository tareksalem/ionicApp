const config = {};

// define the port
config.port = process.env.PORT || 8000;
config.firebaseConfig = {
    apiKey: "AIzaSyAYA4PifxmAe-iaZnqph3N400BDO5N3XcI",
    authDomain: "mgsalatry.firebaseapp.com",
    databaseURL: "https://mgsalatry.firebaseio.com",
    projectId: "mgsalatry",
    storageBucket: "mgsalatry.appspot.com",
    messagingSenderId: "42649487256"
}
process.env.randomId = "-" + Math.random().toString(36).substr(2, 9) + Math.random().toString(36).substr(2, 10);
module.exports = config;