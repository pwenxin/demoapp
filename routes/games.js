let express = require('express');
let router = express.Router();
let GameItem = require('../db/gameItem')

/* GET home page. */
router.get('/', function (req, res, next) {
    let result = null
    GameItem.find({}, async (err, data) => {
        if (err){
            res.send({code: 400, message: err})
        }
        result = await data
        res.json(result)
    })
});

module.exports = router;
