const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/everythingApp';

async function startMongo() {
  return mongoose.connect('mongodb://127.0.0.1:27017/everything-app');
}

module.exports = {
  startMongo,
};
