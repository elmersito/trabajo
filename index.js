const express = require("express"),
    app = express(),
    puerto = process.env.PORT || 4321,
    mysql = require("mysql"),
    bodyParser = require("body-parser"),
    myConnection = require("express-myconnection"),
    db = require("./database").config;
hospitalsRoutes = require("./routes/hospitals");
doctorsRoutes = require("./routes/doctors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(myConnection(mysql, db));
app.use("/hospital", hospitalsRoutes);
app.use("/doctor", doctorsRoutes);

app.listen(puerto, err => {
    if (err) {
        console.log(`Tenemos error ${err}`);
    } else {
        console.log(`Todo bien en el puerto ${puerto}`);
    }
})