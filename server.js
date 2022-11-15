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
    const image = drinks[req.params.id].image
    const jpg = image.slice(0, image.length - 3) + 'png'
    console.log(jpg);

    res.render('drinks_show.ejs', {
        drink: drinks[req.params.id],
        id: req.params.id,
        img: jpg

    });
});
















app.listen(PORT, () => {
    console.log(`Listing to port ${PORT}`)

})