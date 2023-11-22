const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const app = express()

const config = require('./app/config/default')

const PORT = process.env.PORT || config.port
const HOST = process.env.HOST || config.host

//For cross origin
app.use(cors())

// For parsing application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, HOST, () => console.log(`Server listening on ${HOST}:${PORT}`))
