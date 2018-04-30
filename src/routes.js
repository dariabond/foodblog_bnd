/**
 * Created by dariabondarchuk on 4/20/18.
 */
const express = require('express');
let router = express.Router();
let db = require('./db/db.js');

//all recipes for feed, the newest first - and only the essential info
//also put the limit
router.get('/recipes/feed', function (req, res) {
    db.select('id', 'title', 'post_date', 'photo_url', 'tags', 'abstract').from('recipes')
        .then((data) => {
            if (!data || !data.length) {
                res.status(404).end();
            } else {
                res.send(data);
            }
        });
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