//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const ejs = require("ejs");
let newLists = [];
let workLists =[];
const date = require(`${__dirname}/date.js`)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    let today = date.getDate();
    res.render("list", {listTitle: today,  newLists :newLists})
})
app.post("/", (req, res) => {
    let item = req.body.newItem;
    if(req.body.list === "Work"){
        workLists.push(item);
        res.redirect("/work");
    }else{
        newLists.push(item);
        res.redirect("/");
    } 
})

app.get("/work", (req,res)=>{
    res.render("list", {listTitle:`Work TODO List`, newLists: workLists})
})



app.listen(3000, () => {
    console.log("server is started port 3000");
})