/**
 * Created by dariabondarchuk on 4/20/18.
 */
const express = require('express');
let router = express.Router();

router.get('/recipes', function (req, res) {
    res.send([
        {id: 1}, {id: 2}
    ]);
});

module.exports = router;