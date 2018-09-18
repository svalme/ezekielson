const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const PORT = process.env.PORT || 5000;

var router = require('./routing/routing.js');
var testrouter = require('./cloud_functions/db/testrouter.js');
var showarticles = require('./cloud_functions/updates/showarticles.js');
var addarticles = require('./cloud_functions/updates/addarticles.js');

/** 
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

*/

var app = express();
app.use(express.static(path.join(__dirname, 'public')))
  .use(router, testrouter, showarticles, addarticles)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

// app.use(router, db, updates);



  
