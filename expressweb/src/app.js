const express = require('express');
const app = express();

app.get("",(req, res)=>{
    res.send("welcome")
})
app.listen(8000,()=>{
    console.log("in 8000 port")
})