var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
    onGet();
    res.sendStatus(200);
});

router.post('/', function(req, res, next) {
    res.sendStatus(201);
  });

function onGet() {
axios
    .post("https://api.mage.ai/v1/predict", { 
        api_key: "XB027Tsks23dLOOgLpQdy8YCQ2O9suZCiZEJ4Iw4",
        features: [
            {
              "date_": "2022-02-20 00:00:00+00:00",
              "high": "36,943.88",
              "price": "48,824.99"
            }
          ],
          model: "custom_prediction_regression_1645318335046",
          version: "2",

    })
    .then(function (response) {
    console.log("Response:", response.data);
    })
    .catch(function (error) {
    console.log("Error", error);
    });
//console.log(values);
}

module.exports = router;
