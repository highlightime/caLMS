const express = require('express');
const app = express();
const api = require('./router/index');
const cors = require('cors');
const request = require('request');

app.use(cors());
app.use('/', api);

const port = 3001;
app.listen(port, () => {console.log(`server is on ${port}`)});