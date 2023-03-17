const express=require('express');

const router=express.Router();
    router.get("/",function(req,res){
        res.render('home', { title: 'Hey', message: 'Hello there!' })
    });
module.exports=router;
