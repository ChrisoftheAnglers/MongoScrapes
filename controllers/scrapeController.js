// Dependencies
var router = require("express").Router(); // Use router object instead of express app
var exphbs = require("express-handlebars");
var path = require("path");

// Model
var db = require("../models");

// Routes

// Route to get index page populated with article scrapes to choose
router.get("/", function(req, res) {
    db
    res.render("index", hbsObject)
});

// Route to get page displaying scraped articles that have been saved by the user
router.get("/saved", function(req, res) {

});

// Route to refresh scraped articles on 
router.get("/scrape", function(req, res) {
    axios.get("http://www.bbc.co.uk").then(function(response) {
        var $ = cheerio.load(response.data);
    })
})

// Export router (simpler than exporting a function and then using app object as a parameter for function parent)
module.exports = router;