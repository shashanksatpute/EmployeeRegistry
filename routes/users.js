var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var jsonResponse={
    "items": [
      { name: 'Dilip', surname: 'Chavan', birthYear: 1987, birthCity: 63,skills:"Drawing,painting",Department:"IT" },
      {
        name: 'Aruna',
        surname: 'Chavan',
        birthYear: 1968,
        birthCity: 34,skills:"Drawing,painting",Department:"IT"
      },
      { name: 'Shashank', surname: 'Satpute', birthYear: 1991, birthCity: 45,skills:"Drawing,writing",Department:"welder" },
      { name: 'Gauri', surname: 'Taware', birthYear: 2014, birthCity: 45,skills:"Drawing,Sitting",Department:"painter" },
      { name: 'Prajakta', surname: 'Taware', birthYear: 1989, birthCity: 43,skills:"Drawing,timepass",Department:"Admin" },
      { name: 'Chandrakant', surname: 'Taware', birthYear: 1987, birthCity: 89,skills:"Drawing,cooking",Department:"not" },
      { name: 'Rugved', surname: 'Taware', birthYear: 2018, birthCity: 6873,skills:"Drawing,playing",Department:"field" },
      { name: 'Shruti', surname: 'Satpute', birthYear: 1992, birthCity: 89,skills:"Drawing,running",Department:"ok" },
    ] 
  };
  res.send(jsonResponse);
});

module.exports = router;
