//declare variable / import dependancies
//web application framework
const express = require('express')
    //Loads environment variables from .env file
const dotenv = require('dotenv').config()
    //bring in error handler
const { errorHandler } = require('./middleware/errorMiddleware')
    //declare port variable
    //port is equal to environmental variable or assigned port
const port = process.env.PORT || 5000

//declare app 
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
    //require routes
app.use('/api/goals', require('./routes/goalRoutes'))
    //listen for port
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})