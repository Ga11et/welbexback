const Pool = require('pg-pool')
const dotenv = require('dotenv').config()

module.exports = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
})