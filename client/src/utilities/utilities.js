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

export const getTotal = (transaction) => {
  const categorySums = getSum(transaction);
  return _.sum(categorySums);
};

export const getLabels = (transactions) => {
  const categorySums = getSum(transactions, 'type');
  const total = getTotal(transactions);
  const labels = _(categorySums)
    .map((category) => _.assign(category, { percent: (100 * category.sum) / total })).value();
  return labels;
};

export const getDoughnutConfigs = (transaction) => {
  const data = getSum(transaction);
  let backgroundColor = _.map(transaction, (t) => t.color);
  backgroundColor = _.uniq(backgroundColor);
  const config = {
    data: {
      datasets: [{
        label: 'My First Dataset',
        data,
        backgroundColor,
        hoverOffset: 4,
        space: 10,
        borderRadius: 30,
      }],
    },
    options: {
      cutout: 115,
    },
  };
  return config;
};
