module.exports={
  selectall:async function(){

      const menuSchema = require('../model/menuSchema.js');
      try{
      const rslt=await menuSchema.find()
                                  .sort({order:'asc'});
                                  return rslt;
      }catch(err){
        return (err);
      }
},
  createOne:async (data) => {
                          const menuSchema = require('../model/menuSchema.js');
                          const menu= menuSchema(data);
                          try{
                            const rslt=await menu.save();
                            return rslt;
                          }catch(err){
                            return (err);
                          }
            }
}
