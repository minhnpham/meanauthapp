const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database.js');

// Connect to DB
mongoose.connect(config.database);

// On Connection to DB
mongoose.connection.on('connected', function(){
  console.log('Connected to database '+ config.database);
});

// On DB Connect Error
mongoose.connection.on('error', function(err){
  console.log('Database connection error: ' + err);
});

const app = express();

const users = require('./routes/users');

// Port Number
const port = 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

// Route Index
app.get('/', function(req, res){
  res.send('Invalid Endpoint');
});

app.get('*', function(req, res) {
  // res.sendFile(path.join(__dirname, 'public/index.html'));
  res.redirect('/');
});

app.listen(port, function() {
  console.log('Server started on port ' + port);
});

