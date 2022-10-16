const mongoose= require('mongoose');
const profileSchema = new mongoose.Schema({
    
    firstName: String,
    secondName:String,
    email:String,
    jobTitle:String,
    country: String,
    state:String

})
const Profile = mongoose.model("profile",profileSchema);
module.exports= Profile;
