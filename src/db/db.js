/**
 * Created by dariabondarchuk on 4/23/18.
 */
let config      = require('./knexfile.js');
let env         = 'development';
let knex        = require('knex')(config[env]);

module.exports = knex;

knex.migrate.latest([config]); 