//Twój kod
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public/zadanie01'));

app.post('/send', (req, res)=> {
    let info = ''
    let {number1, number2 } = req.body;
    let result = parseInt(number1) % parseInt(number2);
    if(result === 0) {
        info = "Liczba 2 jest dzielnikiem liczby 1";
     }
     else {
         info = "Liczba 2 nie jest dzielnikiem liczby 1";
     }
     res.send(info);
})

app.listen(3000, ()=> {
    console.log("Serwer pracuje na porcie 3000");
})