const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/everythingApp';

async function startMongo() {
  return mongoose.connect(connectionString);
}

module.exports = {
  startMongo,
};
