const express = require('express');
const app = express();
app.get("/",(req,res)=>{
    res.write("<h1>home page</h1>");
    res.end();
})
app.get("/about",(req,res)=>{
    res.send("about page");
})
app.get("/json",(req,res)=>{
    res.json({
        id:1,
        name:"riddhi"
    });
})
app.listen(3000,()=>{
    console.log("welcome")
})