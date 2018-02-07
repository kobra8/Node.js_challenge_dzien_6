//Twój kod
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static('./public/zadanie02'));

app.post('/cookie/set', (req, res) => {
    let name = req.body.name;
    res.cookie('name', name, {maxAge: 60000000});
    res.send(`Zapisano imię ${name} w ciasteczku.`)
})
app.get('/cookie/show', (req, res)=> {
   let cookieName = req.cookies.name;
   res.send(`Twoje imię to: ${cookieName}`)
})
app.get('/cookie/check', (req, res)=> {
    let cookieName = req.cookies.name;
    if(cookieName == undefined) {
        res.send("Imię jszcze niezapisane")
    }
    else {
        res.send(`Imię ${cookieName} zostało zapisane.`)
    }
})

app.listen(3000, ()=> {
    console.log("Serwer robi na porcie 3000")
})