var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3030;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Variables
var table = [
    {
        routeName: "table1",
        name: "Table 1",
        username: "username",
        email: "Email",
        phone: "phone",
        diet: "diet",
    },
    {
        routeName: "table2",
        name: "Table 2",
        username: "username",
        email: "Email",
        phone: "phone",
        diet: "diet",
    },
    {
        routeName: "table3",
        name: "Table 3",
        username: "username",
        email: "Email",
        phone: "phone",
        diet: "diet",
    },
    {
        routeName: "table4",
        name: "Table 4",
        username: "username",
        email: "Email",
        phone: "phone",
        diet: "diet",
    },
    {
        routeName: "table5",
        name: "Table 5",
        username: "username",
        email: "Email",
        phone: "phone",
        diet: "diet",
    },
];

var waitlist = [
    {
        routeName: "table1",
        name: "Table 1",
        username: "username",
        email: "Email",
        phone: "phone",
        diet: "diet",
    },
    {
        routeName: "table2",
        name: "Table 2",
        username: "username",
        email: "Email",
        phone: "phone",
        diet: "diet",
    },
    {
        routeName: "table3",
        name: "Table 3",
        username: "username",
        email: "Email",
        phone: "phone",
        diet: "diet",
    },
    {
        routeName: "table4",
        name: "Table 4",
        username: "username",
        email: "Email",
        phone: "phone",
        diet: "diet",
    },
    {
        routeName: "table5",
        name: "Table 5",
        username: "username",
        email: "Email",
        phone: "phone",
        diet: "diet",
    },
];

// Routes

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  

app.get("/table", function(req, res){
    return res.json(table);
});

app.get("/waitlist", function(req, res){
    return res.json(waitlist);
});

// Listener
app.listen(PORT, function(){
    console.log("App listing on PORT " + PORT);
});