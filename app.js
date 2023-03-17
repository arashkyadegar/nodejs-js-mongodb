require('express-async-errors');
var path = require('path');
//const winston=require('winston');
var express = require('express');
const session = require('express-session')
const appDebugger=require('debug')('app:startup');
require('./config/db')();
var http=require('http');
var app = express();

var passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());
var GoogleStrategy = require('passport-google-oauth20').Strategy;
passport.use(new GoogleStrategy({
  clientID: '373444033004-d7e5gd78b0qo175tdl8udndoprelr5nn.apps.googleusercontent.com',
  clientSecret: '_xAP-SY_Ra2keuieWTMOYezZ',
  callbackURL: 'http://127.0.0.1:8000/return'
  },
  function(accessToken, refreshToken, profile, cb) {
    // In this example, the user's Facebook profile is supplied as the user
    // record.  In a production-quality application, the Facebook profile should
    // be associated with a user record in the application's database, which
    // allows for account linking and authentication with other identity
    // providers.

  //  console.log(profile);
    return cb(null, profile);
  }));

  passport.serializeUser(function(user, cb) {
    cb(null, user);
  });

  passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });
  
  app.get('/login/google',
  passport.authenticate('google', {scope: 'https://www.googleapis.com/auth/plus.login'}));

  app.get('/return',
    passport.authenticate('google', { failureRedirect: '/login' }),

    function(req, res) {

      console.log(req.user._json);
      res.redirect('/home');
    });
  // Initialize Passport and restore authentication state, if any, from the
  // session.
  app.use(passport.initialize());
  app.use(passport.session());

app.set('view engine', 'jade');
require('./routes/index')(app);
app.use(express.static(path.join(__dirname, 'public')));
const PORT = process.env.PORT || 8000;

const server =http.createServer(app).listen(PORT,function(){
  console.log(`Server is listening on port ` + PORT);
});

module.exports = server;
