const express=require('express');
const router=express.Router();
const auth = require('./auth');
const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

module.exports=router;
