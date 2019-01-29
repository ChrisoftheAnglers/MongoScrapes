// Dependencies
var mongoose = require("mongoose");
var express = require("express");
var exphbs = require("express-handlebars");
var axios = require("axios");
var cheerio = require("cheerio");

// Require database models
var db = require("./models");
var PORT = 8080;

// Initialize Express
var app = express();

// Use JSON parsing
app.use(express.urlencoded({extended: true}));
app.use(epxress.json());

// Setup rendering with Handlebars
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Use public folder for static assets
app.use(express.static("public"));

// Use deployed database with mongoose
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI);

// Get routes from file
var routes = require("./controllers/scrapeController.js");
app.use(routes);

// Start the server
app.listen(PORT, function() {
    console.log(`App running on port ${PORT}!`);
});