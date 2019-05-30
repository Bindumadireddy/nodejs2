var express=require('express');
var path=require("path")
var app=express();
app.use(express.static("public"))
app.get("/",function(req,res)
{
	res.sendFile(path.join(__dirname,"public/index.html"))
})
app.get("/training",function(req,res)
{
	res.sendFile(path.join(__dirname,"public/training.html"))
})
app.listen(7000,function(){
	console.log("Server is started")
})
