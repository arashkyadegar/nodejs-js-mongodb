module.exports=function(){
      return new Promise((resolve,reject) => {
        ///const logger=require('./winstonConfig');

        const mongoose=require('mongoose');

        mongoose.connect("mongodb://localhost/webSite2",{useNewUrlParser: true});
        var db = mongoose.connection;



         db.on('error',err =>{
            console.error.bind(console, 'connection error:')
             reject(err);
         });

          db.once('open', function() {
            console.log(" we're connected!");

            resolve(db);
          })
      });
  }
