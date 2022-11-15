const { response } = require('express');
const express = require('express');
const app = express();
const drinks = require("./models/drinks") // import drinks data

const PORT = 3013;


app.get('/', (req,res) =>{
    res.send('Welcome to the Gitpub App!');
});

//Drinks Route
app.get('/drinks', (req,res) => {
        console.log('drinks',drinks)
    res.render(
        'drinks_index.ejs',
        {
            allDrinks:drinks
        }
    );
});

app.get('/drinks/:id', (req,res) => {
    console.log(req.params.id);
    res.render('drinks_show.ejs', {
        drink: drinks[req.params.id],
        id: req.params.id
    });
});
















app.listen(PORT, () => {
    console.log(`Listing to port ${PORT}`)

})