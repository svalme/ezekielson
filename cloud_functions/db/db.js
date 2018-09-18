const express = require('express');

var mysql = require('mysql');




 /**
  * db.js will be imported by other files and will just have
  * methods that are called by the other files to send info.
  * 
  * main thing that db.js's methods do:
  *     might only need this to interact with s3 for my files(articles)
  *     store credit card info
  *     send credit card info back to display to the account holder
  *     store account info
  */
