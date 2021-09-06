const express = require('express');
const app = express();
const port = 3100;
const mongoose = require('mongoose')
const linkRoute = require('./routes/linkRoutes')
const path = require('path')
const personSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const Person = mongoose.model('Person', personSchema);


mongoose.connect('mongodb://localhost/newlinks')

let db = mongoose.connection;

db.on("error", () => { console.log("houve um erro") });
db.once("open", () => { console.log("Banco carregado!") })

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'))

app.use('/', linkRoute)


app.listen(port, () => console.log(`Exemple app listening on port ${port}`))