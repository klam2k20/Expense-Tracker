import React from 'react';
import PropTypes from 'prop-types';
import UilTrash from '@iconscout/react-unicons/icons/uil-trash-alt';

const transactions = [
  {
    color: 'rgb(255, 99, 132)',
    type: 'Savings',
    percent: 45,
  },
  {
    color: 'rgb(54, 162, 235)',
    type: 'Investments',
    percent: 20,
  },
  {
    color: 'rgb(255, 205, 86)',
    type: 'Expenses',
    percent: 35,
  },
];

function History() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-bold text-center">History</h1>
      {transactions.map((transaction) => <Transaction transaction={transaction} />)}
    </div>
  );
}

function Transaction({ transaction }) {
  if (!transaction) return <></>;
  return (
    <div className="flex justify-center bg-gray-50 rounded-r py-2" style={{ borderRight: `0.5rem solid ${transaction.color}` }}>
      <button className="px-2" aria-label="Delete" type="button"><UilTrash size="20" color={transaction.color} /></button>
      <span className="w-full text-center">{transaction.type}</span>
    </div>
  );
}

Transaction.defaultProps = {
  transaction: PropTypes.shape({
    color: 'rgb(255, 205, 86)',
    type: '',
    percent: 0,
  }),
};

Transaction.propTypes = {
  transaction: PropTypes.shape({
    color: PropTypes.string,
    type: PropTypes.string,
    percent: PropTypes.number,
  }),
};
export default History;
