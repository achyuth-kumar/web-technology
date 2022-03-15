const express = require("express")
const mongoose = require("mongoose")
const path = require("path")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join("public")))

mongoose.connect('mongodb+srv://admin:admin@cluster0.e1vqr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const studentSchema = new mongoose.Schema({
    USN:  String,
    Name: String,
    Subject_code:   String,
    CIE_marks : Number
  });

const Student = mongoose.model('Student', studentSchema);

app.get("/",(req,res)=>res.sendFile("index.html"))

app.post("/student",async (req,res)=>{
    const {USN, Name, Subject_code, CIE_marks} = req.body
    const student = await Student.create({USN, Name, Subject_code, CIE_marks})
    res.redirect("/")
})

app.get("/students",async(req,res)=>{
    const students = await Student.find({CIE_marks:{$lt:20}})
    res.send(students)
})

app.listen(4256,()=>console.log("Server running at port 4256"))