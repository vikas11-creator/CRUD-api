const knex = require('knex');
const config = require('../db/knex')
const db = knex(config.development)
 module.exports = db;