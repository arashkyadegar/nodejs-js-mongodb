module.exports={
  selectall:async ()=> {
      const dal = require('../dal/articleDal.js');
      try{
      const rslt=await dal.selectall();
      return rslt;
    }catch(err){
      return   res.status(400).json({
       status: err,
       message: "hahah2"

   })
    }
  }
,
  createOne:async (data) => {
                          const dal = require('../dal/articleDal.js');
                            const rslt=await dal.createOne(data);
                            return rslt;

}}
