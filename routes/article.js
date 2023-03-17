const express=require('express');
const router=express.Router();

    router.get("/create",async function(req,res){
      console.log('yeah');
      const bus = require('../bus/articleBus.js');

          var data={
            rate:3,
            publishStatus:true,
            showPrint:true,
            showPdf:true,
            showAuthor:true,
            title:"خوب شد پنالتی پیکان گل نشد/ دوست دارم لیگ برتر تعطیل شود",
            description:"به گزارش خبرنگار مهر، مهدی تارتار پس از پیروزی یک بر صفر پیکان تهران مقابل شهرخودرو مشهد در دیداری که روز گذشته، ۲۲ دقیقه از آن روز قبل برگزار شده بود اما به خاطر شرایط بارانی ادامه پیدا نکرد تا امروز برگزار شود گفت: با توجه به اینکه قرار بود ۷۰ دقیقه بازی کنیم با بازیکنان پیکان صحبت کردیم که تهاجمی کار را شروع کنند. کاملاً هم بازی را در اختیار داشتیم. در نیمه اول می‌توانستیم به گل‌هایی هم برسیم.سرمربی پیکان تهران ادامه داد: در نیمه دوم تغییراتیداشتیموتوانستیمبهپنالتیهم"
,
            publishDate:Date.now(),
            publishTime:Date.now(),
            imageUrl:"1234.jpg",
            author:"ارشک یادگار",
            language:"",
            fileUrl:"1111.xlsx",
            tags:""
          }
          const rslt=await bus.createOne(data);
          res.send(rslt);
    });
module.exports=router;
