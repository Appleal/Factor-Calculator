var express = require("express");
var app = express();
app.set("view engine","ejs");
var main = require("./controllers/main")


app.get("/",main.showIndex);
app.get("/cha/:num",main.showCha);
app.listen(3100)