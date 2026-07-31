const express = require('express');

const app = express();

app.use("/user", (req, res) =>{
    res.send("HAHAHAHA");
})

//this wil only handle GET call to /user
app.get("/user",(req , res)  => {
    res.send({firstname:"Prachi", lastname: "Mehra"  });
});

app.post("/user",(req , res)  => {
    //saving data to DB
    res.send({firstname:"Prachi", lastname: "Mehra"  });
});

app.delete ("/user", (req , res) =>{
    res.send("Deleted succesfully");
});

app.use("/test",(req , res) =>{
    res.send("hello from the server");
});

app.listen(7777, () =>  {
    console.log("Server is successfully listening on port 7777");
});
