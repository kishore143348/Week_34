// console.log("Heloo world");
const express = require("express");
const {default:mongoose}  = require ("mongoose");
const app = express();


mongoose
.connect(
    "mongodb+srv://kishu97:jmRvbC2Ikn4uxtmy@cluster0.nkjardx.mongodb.net/"
)
.then(()=>{
    console.log("Database is Connected");
})
.catch((err) =>{
    console.log(err,"Something went wrong");
});

//test api
app.get("/test",(req,res)=>{
res.send("Hello Everyone");
});

app.listen(5000,()=>{
    console.log("Server us running");
});