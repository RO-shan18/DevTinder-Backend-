const express = require("express");

const app = express();

//HTTP METHODS

app.get("/hello",(req, res)=>{
    res.send("Hello Hello Hello");
})

app.post("/user", (req, res)=>{
    res.send("Data post successfully");
})

app.put("/user", (req, res)=>{
    res.send("Data Update successfully");
})

app.delete("/user", (req, res)=>{
    res.send("Data Deleted successfully");
})

app.patch("/user", (req, res)=>{
    res.send("Data Updated in patch.....");
})

//different routes
/* app.use("/ab+c", (req, res)=>{
    res.send("ABC inside the Server.....");
})
 */

/* app.use("/ab*c", (req, res)=>{
    res.send("ABC inside the Server.....")
}) */


/* app.use("/a(bc)+d", (req, res)=>{
    res.send("ABC inside the Server.....");
}) */

 app.use("/ab?d", (req, res)=>{
    res.send("ABC inside the Server.....");
}) 

/* app.get(/a/, (req, res)=>{
    res.send("ABC inside the Server.....");
}) */

/* app.get(/.*full$/, (req, res)=>{
    res.send("ABC inside the Server.....");
}) */

//user query
app.get("/user", (req, res)=>{
    res.send("ABC inside the Server.....");
    console.log(req.query);
}) 

//user query through routes
app.get("/userdata/:userid/:username/:userpassword", (req, res)=>{
    res.send("User data send successfully.....")
    console.log(req.params)
})



//If we put this app.use on top of our code then this will not let u to route different endpoints
/* app.use("/",(req, res)=>{
    res.send("Hello World!!");
}) */

//Any incoming req. from outside will listen this port 
app.listen(7777, ()=>{
    console.log("Listened to the port no.7777");
});