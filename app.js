const express = require('express');
const app = express();

//  on the basis of this model we can perform curd 
const userModel = require('./usermodel')



app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/create', async (req, res) => {
    let createdUser = await userModel.create({
        name: "Fahad",
        username: "fahad12322",
        email: "raofahadgul785@gmail.com"
    })
    try {
        res.send(createdUser)
    } catch (error) {
        res.send(error)
    }
})

app.get('/about', (req, res) => {
    res.send('This is about page')
})


app.get('/users', async (req, res) => {
    res.send("This is users page")
})
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));





