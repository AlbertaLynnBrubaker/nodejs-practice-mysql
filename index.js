const express = require('express')
const app = express()
const port = 3500
app.use(express.json())
app.use(express.urlencoded({
  extended: true
})
)
app.get('/', (req, res) => {
  res.json({message: 'ok'})
})
app.listen(port, () => {
  console.log('Example app listening on PORT=3500')
})