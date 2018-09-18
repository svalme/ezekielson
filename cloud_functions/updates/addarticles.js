const express = require('express');
var addarticles = express.Router();

/**
 * main thing that update.js:
 *      vetting curl info and using db.js methods to 
 *      send info to s3.
 *      this updates the articles i want to be shown to the website.
 * 
 * this needs a router because it is receiving an https request
 * from my computer with the article file.
 */


module.exports = addarticles;