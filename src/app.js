const express = require("express");
const app = express();
const path = require('path');
const port = 3000;
const hbs = require("hbs");
const static_path = path.join(__dirname,"../public");

app.use(express.static(static_path)); 
app.set('view engine','hbs');

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render('about.hbs')
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})
app.get("*",(req,res)=>{
    res.send("404 error page oops")
})


app.listen(port,()=>{
    console.log("main sun rha hun ");
})