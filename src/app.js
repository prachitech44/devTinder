const express = require('express');

const app = express();

app.get("/user/:userID/:name?passwprd", (req, res) =>{
    console.log(req.params);
    res.send({firstName: "Prachi", lastname: "Mehra"});

});

app.listen(7777, () =>  {
    console.log("Server is successfully listening on port 7777");
});
