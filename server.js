const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const port = process.env.PORT || 3001
const app = express()




app.listen(port, () => console.log(`Server is running on port ${port}`))