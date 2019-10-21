const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Configuring the database
const mongoose = require('mongoose');
const dbConfig = 'mongodb://localhost:27017/products';

// Connecting to the database
mongoose.set('useCreateIndex', true);
mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connect database !!")
}).catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
});

//set post body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//routers import
const product = require('./routers/product.route');
app.use('/products', product);

let port = 3000;

app.listen(port, () => {
    console.log(" Serve is up and running on port: " + port)
});

