const express = require('express');
var testrouter = express.Router();



// might only need this to interact with s3 for my files(articles)
// and to store credit card info

/**
 * if testrouter.js doesn't have a router, the user interface part of
 * the app cannot send info to the database.
 * 
 * i want to display database info within the browser?
 * S3 might do that automatically.
 * 
 */

module.exports = testrouter;