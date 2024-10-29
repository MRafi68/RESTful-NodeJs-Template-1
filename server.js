require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const apiRoutes = require('./routes/api')
const cors = require('cors')

const app = express()
const PORT = process.env.port || 3000;

//Middleware to parse JSON request
app.use(bodyParser.json())

//API Routes
app.use('/api', apiRoutes)

//Default routes
app.get('/', (req, res) => {
    res.send('Welcome to Node.Js Service')
})

//Use Cors
app.use(cors())

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });