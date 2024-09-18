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
        username: "Fahad",
        email: "raofahadgul785@gmail.com"
    })
    try {
        res.send(createdUser)
    } catch (error) {
        res.send(error)
    }
})

app.get('/update', async (req, res) => {
    // userModel.findOneAndUpdate(findone,updated,{new:true}) these are the parameters of the function
    let updatedUser = await userModel.findOneAndUpdate({ name: "Fahad" }, { name: "Fahad Gul" }, { new: true }
    )
    res.send(updatedUser)
})

app.get('/read', async (req, res) => {
    let users = await userModel.find();
    //find will read all the users and if we want to read the data of one user we will pass it as a parameter in find function

    let user = await userModel.find({ name: "Fahad" })

    // there is a diff btw the find and fineOne as find will give you an array even if the user is not found it will give an empty array
    // but findone will give you null if the user is not found and if found it will give and object, and it will give the first object it finds
    res.send(user)
    // res.send(users)

})

app.get('/delete', async (req, res) => {
    let user= await userModel.findOneAndDelete({name:"Fahad"})
    res.send(user)
})

app.get('/users', async (req, res) => {
    res.send("This is users page")
})
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));





