const express = require('express')
const app = express()
const routes = require('./api/routes')

app.use('/api', routes)
app.listen(8080)