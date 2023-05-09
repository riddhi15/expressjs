const express = require('express');
const path = require('path')
const app = express();
const hbs = require('hbs');
const staticPath = path.join(__dirname,"../pubilc");
const partialpath = path.join(__dirname,"../views/partials");
const requests = require('requests');
// to set view engine
app.set("view engine","hbs")
hbs.registerPartials(partialpath);
// building middleware
//app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    res.render('index',{
        channelname:'riddhi'
    });
})
app.get("/about",(req,res)=>{
   // res.render('about');
   requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=14334024706513b37d8d056d3db1e0dc`)
   .on("data",(chunk)=>{
    const objdata = JSON.parse(chunk);
    const arrData = [objdata];
    res.write(arrData[0].name);
}).on("end",(err)=>{
    console.log(err);
    res.end();
});
});
app.get("/*",(req,res)=>{
    res.render('404',{
        errorcomment :"page not found"
    });
})
app.get("/about/*",(req,res)=>{
    res.render('404',{
        errorcomment :"page not found about"
    });
})

// app.get("/",(req, res) =>{
//     res.send("hi express js")
// })

app.get("/about",(req, res) =>{
    res.send("hi express js about us")
})

app.listen(8000,()=>{
    console.log("port at 8000")
})