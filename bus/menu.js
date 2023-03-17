module.exports={
  selectall:async ()=> {
      const menuSchema = require('../dal/menuDal.js');
      try{
      const rslt=await menuSchema.selectall();
      return rslt;
    }catch(err){
      return (err);
    }
  }
,
  createOne:async (data) => {
                          const MenuDalClass = require('../dal/menuDal.js');
                          try{
                            const rslt=await MenuDalClass.createOne(data);
                            return rslt;
                          }catch(err){
                            return (err);
                          }
          }
}
