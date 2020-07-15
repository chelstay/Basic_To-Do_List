// Required Modules/ NPM

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

let items = []; //empty array to store new items

app.set("view engine", "ejs"); // ejs templates (view folder)

app.use(bodyParser.urlencoded({
  extended: true
})); // to use bodyParser

app.use(express.static("public")); // link to static files (public folder): css stylesheet

// Display Date and Day of Week

app.get("/", function(req, res) {

  let day = date();

  res.render('lists', {
    listTitle: day,
    newListItems: items
  });

});



// Pass newItem input to server; then, pass newItem back to list

app.post('/', function(req, res) {

  let item = req.body.newItem; // input

  items.push(item); // push new item to end of array

  res.redirect('/'); // redirect to / w/ new item

});



// Listen on Server

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
