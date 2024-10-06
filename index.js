const express = require('express')
const app = express()
const PORT = 4000

app.get('/', (req,res) => {
  res.send('Welcome, I guess...')
})

app.listen(PORT, () => {
  console.log(`MVP listening to the port ${PORT}`)
})

