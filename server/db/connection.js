const mongoose = require('mongoose');

const connection = mongoose.connect(process.env.MONG0DB_URI).then((db) => {
  console.log('Database Connection Established');
  return db;
}).catch((err) => console.log(`Error Connecting to Database: ${err.message}`));

module.exports = connection;
