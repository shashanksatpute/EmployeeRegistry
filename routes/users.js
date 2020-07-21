var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var jsonResponse={
    "items": [
      { "id": 1, "name": "Apples",  "price": "$2" },
      { "id": 2, "name": "Peaches", "price": "$5" }
    ] 
  };
  res.send(jsonResponse);
});

module.exports = router;
