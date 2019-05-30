var express=require('express')
var router=express.Router();
var students=[
    {
        id:1,
        Name:"Bindu",
        college:"Raghu"
    },
    {
    	id:2,
        Name:"sri",
        college:"Raghu"
        
    },
    {
        id:3,
        Name:"dileep",
        college:"gitam"
    }
]

router.route("/")
    .get((req,res)=>{
        res.send("students")
    })
    .post((req,res)=>{
        var newStudent=req.body;
        students.push(newStudent);
        res.send(student);
    })
    router.route("/:id")
    .put((req,res)=>{
        var id=req.params.id;
        var studentToBeupdated=student.filter((student)=>{
            return student.id==id
        })
        studentToBeupdated[0].Name="bindusri"
        res.send(studentToBeupdated)
    })
    .delete((req,res)=>{
        var id=req.params.id;

        var latestStudent=student.filter((student)=>{
            return student.id!=id
        })

        res.send(lateststudent)
    })




module.exports=router;