var express = require('express');
var router = express.Router();
var db = require('./db')

/* GET home page. */
router.get('/', async function(req, res, next) {
  const user = await db.query(`SELECT * FROM users`) 
  res.send(user.rows);
});

module.exports = router;
