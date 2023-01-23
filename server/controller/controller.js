const model = require('../model/models');

// POST: /api/categories
async function postCategory(req, res) {
  const category = model.Category({
    type: 'Saving',
    color: '#1F3B5C',
  });

  await category.save((err) => {
    if (!err) { return res.json(category); }
    return res.status(400).json({ message: `Error while Posting Category: ${err}` });
  });
}

// GET: /api/categories
async function getCategories(req, res) {
  const categories = await model.Category.find();
  const categoriesResult = categories.map((c) => ({ type: c.type, color: c.color }));
  return res.json(categoriesResult);
}

// POST: /api/transactions
async function postTransaction(req, res) {
  if (!Object.keys(req.body).length) return res.status(400).json({ message: 'Transaction Body is Required' });
  const { name, type, amount } = req.body;
  const transaction = model.Transaction({
    name,
    type,
    amount: Number(amount),
  });
  await transaction.save((err) => {
    if (!err) return res.json(transaction);
    return res.status(400).json({ message: `Error while Posting Transaction: ${err}` });
  });
}

// GET: /api/transactions
async function getTransactions(req, res) {
  const transactions = await model.Transaction.find();
  return res.json(transactions);
}

// DELETE /api/transactions
async function deleteTransaction(req, res) {
  if (!Object.keys(req.body).length) return res.status(400).json({ message: 'Request Body is Required' });
  await model.Transaction.deleteOne(req.body, (err, result) => {
    if (!err && result.deleteCount) return res.json({ mesage: `${req.body._id} Transaction Deleted` });
    if (!result.deleteCount) return res.json({ message: 'Transaction Does Not Exist' });
  }).clone().catch((err) => res.status(400).json({ message: `Error while Deleting Transaction: ${err}` }));
}

// GET /api/labels
async function getLabels(req, res) {
  // JOIN Transaction Type and Category Type
  model.Transaction.aggregate([
    {
      $lookup: {
        from: 'categories',
        localField: 'type',
        foreignField: 'type',
        as: 'category_info',
      },
    },
    {
      $unwind: '$category_info',
    },
  ]).then((labels) => {
    const result = labels.map((label) => ({
      _id: label._id,
      name: label.name,
      type: label.type,
      amount: label.amount,
      color: label.category_info.color,
    }));
    res.json(result);
  }).catch((err) => res.status(400).json({ message: `Error while Getting Labels ${err}` }));
}

module.exports = {
  postCategory,
  getCategories,
  postTransaction,
  getTransactions,
  deleteTransaction,
  getLabels,
};
