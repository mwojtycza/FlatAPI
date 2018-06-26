const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const port = 8000;
const router = require('./routes');

mongoose.connect('mongodb://localhost/flat')
    .then(() => console.log('Connected to database'))
    .catch(() => console.log('Connection to database failed'));

app.use(cors());

app.use(morgan('combined'));

app.use(bodyParser.json());

app.use('/api', router);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})


function errorHandler(err, req, res, next) {
    console.log({error: err});
    res.status(500)
    res.send('error', { error: err })
}