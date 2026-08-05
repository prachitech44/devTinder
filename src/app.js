const express = require('express');

const app = express();

//GET /user => IT checks all the app.xxx("matching route") functions / middleware chain => request handler
// Handle Auth middleware for all GET , POST .....requests

const{ adminAuth , userAuth } = require("./middlewares/auth");

//handle auth middleware for all GET POST ,....requests
app.use("/admin" , adminAuth);

app.get("/user", userAUth ,(req , res) => {
    res.send("user data sent");
   
});

app.get("/admin/getAllData", (req , res) => {
    res.send("All data sent");
   
});


app.get("/admin/DeleteUser", (req , res) => {
    res.send("Deleted a user");

});


app.listen(7777, () =>  {
    console.log("Server is successfully listening on port 7777");
});
