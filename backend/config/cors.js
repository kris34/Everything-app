const cors = require('cors');

function setCors() {
  return cors({
    origin: 'http://localhost:5173',
    methods: ['HEAD, OPTIONS, GET, POST, PUT, DELETE'],
    credentials: true,
    allowedHeadres: ['Content-Type, X-Authorization'],
  });
}

module.exports = {
  setCors,
};
