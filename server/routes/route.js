const express = require('express');
const controller = require('../controller/controller');

const routes = express.Router();

// Category API routes
routes.route('/api/categories')
  .get(controller.getCategories)
  .post(controller.postCategory);

// Transaction API routes
routes.route('/api/transactions')
  .get(controller.getTransactions)
  .post(controller.postTransaction)
  .delete(controller.deleteTransaction);

// Label API routes
routes.route('/api/labels')
  .get(controller.getLabels);

module.exports = routes;
