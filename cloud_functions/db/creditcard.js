/**
 * main things creditcard.js does:
 *      vetting credit card info and sending it
 *      to s3 with db.js methods.
 * 
 *      receiving user account info from the user interface
 *      to get all user info and display within the user
 *      account page.
 * 
 * this does not require a router. it is executed
 * within the user interface pages and just sends
 * info through db.js when ready. db.js has code
 * to create the connection to send to s3.
 */

const express = require('express');