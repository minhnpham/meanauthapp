# MEAN Stack User Authentication App
MEAN stack init project for when you need a web user authentication app.  
Intended to be used as a bootstrap project for when one needs a skeleton User Authentication app.  

## Requirements
+ MongoDB
+ Node v6+

Requires a MongoDB instance to be running to store user credentials and encrypted passwords.  

## Features
### Express Backend
A Node.JS/Express backend providing a REST API, using Mongoose to organize models and query database

### Angular (v4)
Angular-CLI to generate components, services. Local dev server and easy compilation.  

*Updated:* Upgrade from Angular 2 to 4, resulting in faster response and neater code.

### JWT Tokens
Full featured authentication using JSON web tokens. Login and store user session token data, using HTML5 localStorage().

## Notes
To make this more self contained an SQLite module could be used, replacing all the mongoose requirements.  
However this is meant for my personal use, for when I need to quickly build a full MEAN stack app so I don't have to deal with all the initial plumbing work.  
Feel free to use/fork/update as you please.
