const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// require('dotenv').config()

const app = express(); 
app.use(bodyParser.json());
app.use(cors());

const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_user}:${process.env.DB_pass}@cluster0.cr2af.mongodb.net/
${process.env.DB_name}?retryWrites=true&w=majority`;

app.get('/', function(req, res) { 
    res.send('Bismillah hirrah manir rahim');
})

app.listen(process.env.PORT || 5000);

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const productsCollection = client.db("event-task").collection("task");
});