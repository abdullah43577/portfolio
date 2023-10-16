require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const port = process.env.PORT || 5000;
const router = require('./routes/router');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ limit: '50mb', extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.json({ limit: '50mb' })); // for parsing application/json

app.use(cors({ origin: ['http://localhost:3000', 'https://reactmode.netlify.app'] }));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(router);
