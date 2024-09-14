const mongoose = require('mongoose');

// Corrected MongoDB connection string
mongoose.connect('mongodb://127.0.0.1:27017/mongopractice', {
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
