
const mongoose = require ('mongoose');
const connectionString ='mongodb://localhost/LirtenTask' 
function RunDB()  {
mongoose.connect(connectionString, {})
    .then(res=> console.log("connection Done"))
  
}
module.exports = RunDB;