const express = require("express");
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/', (req,res)=>{
    res.send(`Serwis ustawiania ciastek:
    Dostępne url: cookie/set, cookie/remove, cookie/show
    `)
})

app.get('/cookie/set',(req, res)=> {
    res.cookie('test', 'Hello World', {maxAge: 120000});
    res.send('Ciastko ustawione!')
});
app.get('/cookie/remove', (req, res ) => {
    res.clearCookie('test');
    res.send("Ciastko usunięte!")
})
app.get('/cookie/show', (req, res )=> {
    const myCookie = req.cookies.test;
    res.send(`Ciastko ma wartość ${myCookie}`)
})


app.listen(3000, () => {
    console.log("Serwer pracuje na porcie 3000");
})