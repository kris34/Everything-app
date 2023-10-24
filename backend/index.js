const express = require('express');
const { setCors } = require('./config/cors.js');
const { startMongo } = require('./config/mongo');
const cookieParser = require('cookie-parser');
const port = '3000';
const app = express();

start();

async function start() {
  app.use(setCors());
  await startMongo();

  app.use(cookieParser());
  app.use(express.json());

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}
