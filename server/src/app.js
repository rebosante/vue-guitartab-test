console.log('hello')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
  res.send({
    message: `Hi ${req.body.email}! Your user is registered succesfully`
    // message: 'Hi'
  })
})

app.listen(process.env.PORT || 8081)
