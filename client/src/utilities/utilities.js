import _ from 'lodash';

const getSum = (transaction, type) => {
  const sum = _(transaction)
    .groupBy('type')
    .map((transactions, key) => {
      if (!type) return _.sumBy(transactions, 'amount'); // [100, 200, 300]
      return {
        type: key,
        color: transactions[0].color,
        sum: _.sumBy(transactions, 'amount'),
      }; // [{Investments, red, 100}, {Savings, green, 200}, {Expenses, blue, 300}]
    }).value();
  return sum;
};

const getLabels = (transactions) => {
  const categorySums = getSum(transactions, 'type');
  const total = _.sum(getSum(transactions));
  const labels = _(categorySums)
    .map((category) => _.assign(category, { percent: (100 * category.sum) / total })).value();
  return labels;
};

export default getLabels;
