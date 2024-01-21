require('dotenv').config()

const express = require('express'); 
const path = require('path'); 
const app = express(); 
const userController = require('./controller/userController'); 

const indexFile = path.join(__dirname, '../Royal-E-commerce/dist/index.html');
const distPath = path.join(__dirname, '../Royal-E-commerce/dist');

//needed if using formData API 
//app.use(express.urlencoded({ extended: true }));

app.use(express.json()); 
app.use(express.static(distPath)); 

app.post('/register', userController.registerUser); 
app.post('/signin', userController.signinUser); 

app.get('/', (req, res) => {
    res.sendFile(indexFile);
});




app.listen(process.env.PORT, () => {
    console.log(`The application is currently listening on port ${process.env.PORT}.`)
})






//TODO ERROR 
//we can do like an error 
// app.get('*', (req, res) => {
//     res.sendFile(indexFile);
// });