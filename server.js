const { response } = require('express');
const express = require('express');
const app = express();
const drinks = require("./models/drinks") // import drinks data

const PORT = 3013;


app.get('/', (req,res) =>{
    res.send('Welcome to the Gitpub App!');
});

app.get('/drinks', (req,res) => {
        console.log(drinks)
    res.render(
        'drinks_index.ejs',
        {
            allDrinks:drinks
        }
    );
});














app.listen(PORT, () => {
    console.log(`Listing to port ${PORT}`)

})