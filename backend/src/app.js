const express = require('express');

const app = express();
const router = express.Router();

const index = require('../src/routes/index');
const useRoute = require('../src/routes/userRoute');

app.use('/', index);
app.use('/users', useRoute);

module.exports = app;