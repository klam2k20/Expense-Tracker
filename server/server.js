const express = require('express');

const app = express();
const cors = require('cors');
require('dotenv').config({ path: 'config.env' });

const PORT = process.env.PORT || 5000;
// Middleware
app.use(cors());
app.use(express.json());
app.use(require('./routes/route'));

const dbConnection = require('./db/connection');

// eslint-disable-next-line consistent-return
dbConnection.then((db) => {
  if (!db) return process.exit(1);

  // Only listen to the HTTP server if the db connection is established
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

  // Catch app level errors
  app.on('error', (err) => console.log(`Failed to Connect with HTTP Server: ${err}`));
}).catch((err) => console.log(`Failed to Connect to Database: ${err}`));
