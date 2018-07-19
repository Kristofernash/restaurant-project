// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Store Reservation Data here
// ====================================
var waitlist = [];
// ====================================


// Routes

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/make", function (req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
});

app.get("/view", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/api/waitlist", function (req, res) {
    return res.json(reservations);
});

app.get("/api/waitlist/:newReservation", function (req, res) {
    var reserve = req.params.newReservation;

    console.log(reserve);

    for (var i = 0; i < waitlist.length; i++) {
        if (reserve === waitlist[i].routeName) {
            return res.json(waitlist[i]);
        }
    }

    return res.json(false);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});