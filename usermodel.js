const mongoose = require('mongoose');

// MongoDB connection string with authentication
// mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`);
mongoose.connect(`mongodb+srv://fahad:WXX6mMBb8q6qS6E@cluster0.vz7c8.mongodb.net/`);


// Define the user schema
const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
});

// Export the model
module.exports = mongoose.model('User', userSchema);





