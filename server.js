const express=require('express')
const app=express()
app.get('/',function(req,res){
    res.send("i love my sumit")
})

app.listen(6704,function(req,res){
    console.log(" hello jammu")
})