const Database = require('better-sqlite3');

const db = new Database('./src/db/ecommerce.db');

module.exports = db;