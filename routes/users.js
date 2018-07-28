var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

/* GET userlist. */
router.get('/userlist', function (req, res) {
  var db = req.db;
  var collection = db.get('userlist');
  collection.find({}, {}, function (e, docs) {
    res.json(docs);
  });
});

router.post('/adduser', function (req, res) {
  var db = req.db;
  var collection = db.get('userlist');
  collection.insert(req.body, function (err, result) {
    res.send(
      (err == null) ? { msg: '' } : { msg: err }
    );
  });
});

router.delete('/user/:id', function (req, res) {
  var db = req.db;
  var collection = db.get('userlist');
  collection.remove({ '_id': req.params.id }, function (err, result) {
    res.send((err == null) ? { msg: '' } : { msg: err });
  });
});

module.exports = router;
