const express=require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const { ObjectId } = require('mongodb');
const cors=require("cors");

const app=express();

app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173"
}));
/*body {
title:String,
description:String
}*/

app.post('/todo',async function(req,res){
    const createPayload=req.body;
    const parsedPayload=createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            "msg":"you senttt a wrong inputs",
        })
        return
    }
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"Todo Created"
    })
})

app.get('/todos',async function(req,res){
   const todos=await todo.find({})
   res.json({
    todos
})
    
})

app.put('/completed',async function(req,res){
    const updatePayload=req.body;
    const parsedupdatePayload=updateTodo.safeParse(updatePayload);
    if(!parsedupdatePayload.success){
        res.status(411).json({
            "msg":"you sent a wrong id"
        })
        return
    }
    // await todo.updateOne({
    //     _id:req.body.id
    // },{
    //     completed:true
    // });
    await todo.updateOne(
        { _id: new ObjectId(req.body.id) },
        { $set: { completed: true } }
    );
    res.json({
        msg:"todo is marked completed"
    })
    
})


app.listen(3000,()=>{
    console.log("server is running on 3000");
})