const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

// Register Route
router.post('/register', function(req, res, next){
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, function(err, user) {
    if(err){
      res.json({
        success: false,
        msg: 'Failded to register user'
      });
    }
    else
    {
      res.json({
        success: true,
        msg: 'User registered'
      });
    }
  });

});

// Authenticate Route
router.post('/authenticate', function(req, res, next){
  const username = req.body.username;
  const password = req.body.password;
  
  //Check that both username and password is provided else throw error.
  if(!username || !password){
      return res.json({
        sucess: false, msg: 'Username or Password not provided'
      });
  } 


  User.getUserByUsername(username , function(err, user) {
    if(err) throw err;
    if(!user){
      return res.json({
        sucess: false, msg: 'User not found'
      });
    }

    User.comparePassword(password, user.password, function(err, isMatch) {
      if(err) throw err;
      if(isMatch){
        //create token
        const token = jwt.sign(user, config.secret, {
          expiresIn: 604800  // 1 Week
        });

        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      }
      else {
        return res.json({
          success: false,
          msg: 'Wrong password'
        });
      }
    });
  });
});

// Profile Route - With authentication check
router.get('/profile', passport.authenticate('jwt', {session: false}), function(req, res, next){
  res.json({
    user: req.user    
  });
});

module.exports = router;