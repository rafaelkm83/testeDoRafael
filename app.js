const express = require('express');

let app = express();

app.get('/', (req,res)=>res.send("ola mundo"))

//criando um servidor

app.listen(3000,() => console.log("servidor rodando"))
