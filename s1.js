var express=require('express');
var app=express();
app.get("/",function(req,res)
{
	res.send("hai Welcomee to Hello World")
})
app.listen(9000,function(){
	console.log("Server is started")
})