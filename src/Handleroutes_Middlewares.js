const express = require("express");

const app = express();

//You can pass mutiple route handlers as an array also 
// app.get("/user", rh1, rh2, [rh3, rh4, rh5],...)

app.get("/user",(req, res, next)=>{
    console.log("Routing Handle 1")
    next(); //next will redirect to the next routing handler function and handle it first then execute the next
    // res.send("Response 1");
}, (req, res, next)=>{
    console.log("Routing Handle 2")
    // res.send("Response 2");
    next();
}, (req, res, next)=>{
    console.log("Routing Handle 3")
    // res.send("Response 3");
    next();
}, (req, res, next)=>{
    console.log("Routing Handle 4")
    res.send("Response 4");
    next();
})

app.listen(3000, ()=>{
    console.log("App listen to the port no.3000")
})