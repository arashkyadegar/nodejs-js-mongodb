var passport = require('passport');
var configAuth = require('./auth');
var bcrypt = require('bcrypt-nodejs');

var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: '373444033004-d7e5gd78b0qo175tdl8udndopreir5nn.apps.googleusercontent.com',
    clientSecret: '_xAP-SY_Ra2keuieWTMOYezZ',
    callbackURL: 'http://localhost:3000/auth/google/callback'
  }, function(accessToken, refreshToken, profile, cb) {

    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    
      console.log(profile);
  }));

module.exports = passport;
