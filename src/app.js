const express = require('express');

const app = express();

app.get("/getUserData",(req , res) => {
 try {
       //logic of DB call and get user data
    throw new Error("hjnfjk")
    res.send("user data sent");
 }
 catch(err){
    res.status(500).send("Some error contact support team");
 }
});

app.use("/" , ( err, req , res , next) => {
    if(err){
        //log your error 
        res.status(500).send("something went wrong ");
    }
});

app.listen(7777, () =>  {
    console.log("Server is successfully listening on port 7777");
});
