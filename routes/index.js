var express = require('express');
const router=express.Router();
const Home=require('./home');
const User=require('./users');
const Auth=require('./auth');
const Menu=require('./menu');
const Article=require('./article');
module.exports = function(app){
    app.use('/home',Home);
    app.use('/api/menu',Menu);
    app.use('/api/article',Article);
    // app.use('/users',User);
    // app.use('/auth',Auth);
};
