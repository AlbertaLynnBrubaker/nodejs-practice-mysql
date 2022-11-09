const express = require('express')
const app = express()
const port = 3500
const programmingLanguagesRouter = require('./routes/programmingLanguagesRoutes')

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
 // error handling
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

// routes
app.get('/', (req, res) => {
  res.json({message: 'ok'})
})

app.use('/programming-languages', programmingLanguagesRouter)

// listener
app.listen(port, () => {
  console.log('Example app listening on PORT=3500')
})