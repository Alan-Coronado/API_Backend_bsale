const express = require('express');
const app = express();
const { router } = require('./routes/index.router');
const cors = require('cors');
app.use(cors());

const port = process.env.Port || 3000;

app.use(router);
app.listen(port);
console.log('listen...');