var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', function(req, res) {
   var aux=req.body;
   res.render('index', { title: 'Post',informacion:aux});
});
router.put('/', function(req, res) {
   var aux=req.body;
   res.render('index', { title: 'Put',informacion:aux});
});
module.exports = router;
