const mongoose = require('mongoose');

const { Schema } = mongoose;

// Category model
const categorySchema = new Schema({
  type: { type: String, default: 'Investment' },
  color: { type: String, default: 'rgb(255, 205, 86)' },
});

// Transaction model
const transactionSchema = new Schema({
  name: { type: String, default: 'Anonymous' },
  type: { type: String, default: 'Investment' },
  amount: Number,
  date: { type: Date, default: Date.now },
});

const Category = mongoose.model('Category', categorySchema);
const Transaction = mongoose.model('Transaction', transactionSchema);

exports.default = Transaction;
module.exports = { Category, Transaction };
