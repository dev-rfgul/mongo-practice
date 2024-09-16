const mongoose = require('mongoose');

// MongoDB connection string with authentication
mongoose.connect('mongodb://raofahadgul785%40gmail.com:785mcs1148google4411203%40Mondodb@127.0.0.1:27017/mongopractice', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define the user schema
const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
});

// Export the model
module.exports = mongoose.model('User', userSchema);
