// imports
const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const port = process.env.PORT || 3001
const app = express()

// middleware - CORS Config
app.use(cors())

//  middleware - JSON Parsing
app.use(express.json())

// middleware - API Routes
app.use('/api/v1/puzzles', routes.puzzles)

// Connection
app.listen(port, () => console.log(`Server is running on port ${port}`))