const Pool = require('pg-pool')
const dotenv = require('dotenv').config()

module.exports = new Pool({
  database: process.env.DB_BASENAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: 5432,
  host: process.env.DB_HOST,
  ssl: { rejectUnauthorized: false }
})