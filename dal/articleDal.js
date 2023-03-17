module.exports={
  selectall:async function(){

      const schema = require('../model/articleSchema.js');
      try{
      const rslt=await schema.find()
                                  .sort({publishDate:'desc'})
                                  .sort({publishTime:'desc'});
                                  return rslt;
      }catch(err){
        return (err);
      }
},
  createOne:async (data) => {
                          const schema = require('../model/articleSchema.js');
                          const article= schema(data);
                          try{
                            const rslt=await article.save();
                            return rslt;
                          }catch(err){
                            return (err);
                          }
            }
}
