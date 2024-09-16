const mongoose = require('mongoose');

// MongoDB connection string with authentication
mongoose.connect('mongodb://127.0.0.1:27017/mongopractice');


// Define the user schema
const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
});

// Export the model
module.exports = mongoose.model('User', userSchema);
