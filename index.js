const express = require("express"),
    app = express(),
    puerto = process.env.PORT || 4321,
    mysql = require("mysql"),
    bodyParser = require("body-parser"),
    myConnection = require("express-myconnection"),
    db = require("./database").config;
hospitalsRoutes = require("./routes/hospital");
doctorsRoutes = require("./routes/doctor");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(myConnection(mysql, db));
app.use("/hospital", hospitalRoutes);
app.use("/doctor", doctorRoutes);

app.listen(puerto, err => {
    if (err) {
        console.log(`Tenemos error ${err}`);
    } else {
        console.log(`Todo bien en el puerto ${puerto}`);
    }
})
