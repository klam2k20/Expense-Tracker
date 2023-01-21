const express = require('express');
const controller = require('../controller/controller');

const routes = express.Router();

routes.get('/api/categories', controller.getCategories);

module.exports = routes;
