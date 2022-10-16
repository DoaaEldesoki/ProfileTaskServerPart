const express = require('express')
const bodyParser = require('body-parser')
const profileRouter = require('./Routes/ProfileRoutes');
const cors = require('cors');
const RunDB = require('./config/db')

const app = express()
app.use(cors());


app.use(bodyParser.json());

app.use('/', profileRouter)



RunDB();

app.listen(5001, () => {
    console.log("Running on Port 5001")
})