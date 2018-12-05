const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Add env
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./src/route/mainRoute')(app);

app.listen(process.env.START_SERVER || 4000, () => 
    console.log(`Example app listening on port ${process.env.START_SERVER || 4000}`)
);