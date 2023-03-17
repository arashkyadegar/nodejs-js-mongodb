const express=require('express');
const router=express.Router();
router.get("/",async function(req,res){
  const MenuClass = require('../bus/menu.js');
  const rslt=await MenuClass.selectall();
  res.send(rslt);
});
    router.get("/create",async function(req,res){
        const MenuClass = require('../bus/menu.js');
        try{
          var data={
            title:'aboutus',
            link:'#',
            icon:'',
            display:false,
            order:7,
            parent:0,
            allowDelete:false,
            language :'farsi'
          }
          const rslt=await MenuClass.createOne(data);

          res.send(rslt);
        }catch(err){
          return   res.status(400).json({
           status: err,
           message: err.message

       });
        }
    });
module.exports=router;
