const express = require("express");

const app = express();

app.use("/test", (req, res)=>{
    res.send("Hello from the test");
})

app.use("/hello",(req, res)=>{
    res.send("Hello Hello Hello");
})

//If we put this app.use on top of our code then this will not let u to route different endpoints
app.use("/",(req, res)=>{
    res.send("Hello World!!");
})

//Any incoming req. from outside will listen this port 
app.listen(7777, ()=>{
    console.log("Listened to the port no.7777");
});