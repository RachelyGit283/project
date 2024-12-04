const express=require("express")
const router=express.Router()
const Task=require("../models/Task")
router.post("/",async(req,res)=>{
    console.log("post");
    const{title}=req.body
    if(!title)
    {
        return res.ststus(400).send("error")
    }
    const task=await Task.create({title:title});
    res.json(task)
})
module.exports=router