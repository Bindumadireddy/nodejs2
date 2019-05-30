var express=require('express');
var app=express();

var bodyParser=require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

var students=[
    {
        id:1,
        Name:"sunny",
        college:"raghu"
    },
    {
        id:2,
        Name:"Buny",
        college:"gitam"
    },
    {
        id:5,
        Name:"Sharma",
        college:"raghu"
    },
]

// app.use(express.static("public"))

app.get("/",function(req,res){
    res.send("Hello World")
})

//Get all books
app.get("/api/students",(req,res)=>{
    res.send(students)
})

app.post("/api/students",(req,res)=>{
    var newStudent=req.body;
    students.push(newStudent);
    res.send(students);
})

app.put("/api/students/:id",(req,res)=>{
    var id=req.params.id;
    var studentToBeupdated=students.filter((students)=>{
        return students.id==id
    })
    studentToBeupdated[0].Name="mahesh babu"
    res.send(studentToBeupdated)
})

app.delete("/api/students/:id",(req,res)=>{
    var id=req.params.id;

    var latestStudents=students.filter((students)=>{
        return students.id!=id
    })

    res.send(latestStudents)
})

app.listen(8000,function(){
    console.log("Server is started")
})