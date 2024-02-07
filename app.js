const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const routes = require('./routes');
const bodyParser = require('body-parser');

//necessary setup for ejs frontend, express data handling and possible error preventions
app.use(express.json({ limit: '50mb' }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json({ limit: 100 }));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use('/', routes);

module.exports = app;