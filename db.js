//const mysql = require("mysql2");
// const db = mysql.createConnection({
//     host: "b7vt4l9sq4h6yjh8ld4u-mysql.services.clever-cloud.com",
//     database: "b7vt4l9sq4h6yjh8ld4u",
//     user: "urg3mkovbvlvdtn8",
//    // password: "klNXyWBBiAHCtO7HbZwm",
// //});
// module.exports = db

const mysql = require("mysql2");
const db = mysql.createConnection({
    host: "localhost",
    database: "flightreservation",
    user: "root",
    password: "Gee@2002",
});
module.exports = db