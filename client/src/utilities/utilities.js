import _ from 'lodash';

const getSum = (data, type) => {
  const sum = _(data)
    .groupBy('type')
    .map((transactions, key) => {
      if (!type) return _.sumBy(transactions, 'amount'); // [100, 200, 300]
      return {
        type: key,
        color: transactions[0].color,
        sum: _.sumBy(transactions, 'amount'),
        categoryId: transactions[0].categoryId,
      }; // [{Investments, red, 100}, {Savings, green, 200}, {Expenses, blue, 300}]
    }).value();
  return sum;
};

export const getTotal = (data) => {
  const categorySums = getSum(data);
  return _.sum(categorySums);
};

export const getLabels = (data) => {
  const categorySums = getSum(data, 'type');
  const total = getTotal(data);
  const labels = _(categorySums)
    .map((category) => _.assign(category, { percent: (100 * category.sum) / total })).value();
  return labels;
};

export const getDoughnutConfigs = (transactions) => {
  const data = getSum(transactions);
  let backgroundColor = _.map(transactions, (t) => t.color);
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
