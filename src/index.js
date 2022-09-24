const express = require('express')
const pool = require('./db')

const app = express()

app.get('/', async (req, res) => {
  try {
    const data = await pool.query('SELECT * FROM tabledata')
    res.status(200).json(data)
  } catch (error) {
    console.log(error)
    res.status(200).json('bad')
  }
})

const port = process.env.PORT || 8000
app.listen(port, () => console.log(`app started on port: ${port}`))