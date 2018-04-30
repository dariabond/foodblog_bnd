/**
 * Created by dariabondarchuk on 4/20/18.
 */
const express = require('express');
let router = express.Router();
let db = require('./db/db.js');

//all recipes for feed, the newest first - and only the essential info
router.get('/recipes', function (req, res) {
    res.send([
        {id: 1}, {id: 2}
    ]);
});

//recipes by category
router.get('/recipes/category/:id', function(req, res) {
    const categoryId = req.params.id;
    db.select('*').from('recipes').where('id', 'in', (db.select('recipe_id').from('recipes_categories').where('category_id', categoryId)))
        .then((data) => {
            if (!data || !data.length) {
                res.status(404).end();
            } else {
                res.send(data);
            }
        });
});

//recipe by id
router.get('/recipes/:id', function(req, res) {
    const recipeId = req.params.id;
    db.select('*').from('recipes').where('id', recipeId)
        .then((data) => {
            if (!data || !data.length) {
                res.status(404).end();
            } else {
                res.send(data);
            }
        });
});


module.exports = router;