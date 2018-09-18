const express = require('express');
var router = express.Router();

// link urls with html files

// main page
router.get('/', (req, res) => res.render('pages/index'))

// check router page
router.get('/check', (req, res) => res.send('Birds page'))




module.exports = router;