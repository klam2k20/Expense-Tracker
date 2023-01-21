const express = require('express');

const app = express();
const cors = require('cors');
require('dotenv').config({ path: 'config.env' });

// Middleware
app.use(cors());
app.use(express.json());
app.use(require('./routes/route'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
