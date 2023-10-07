const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes/router');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(cors());

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});

app.use(router);
