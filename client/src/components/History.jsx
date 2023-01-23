import React from 'react';
import PropTypes from 'prop-types';
import UilTrash from '@iconscout/react-unicons/icons/uil-trash-alt';
import { useGetLabelsQuery } from '../store/apiSlice';

function History() {
  const {
    data, isFetching, isSuccess, isError, error,
  } = useGetLabelsQuery();
  let content;

  if (isFetching) {
    content = <div>Loading...</div>;
  } else if (isSuccess) {
    content = data.map((transaction) => <Transaction transaction={transaction} />);
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-bold text-center">History</h1>
      {content}
    </div>
  );
}

function Transaction({ transaction }) {
  if (!transaction) return <></>;
  return (
    <div className="flex justify-center bg-gray-50 rounded-r py-2" style={{ borderRight: `0.5rem solid ${transaction.color}` }}>
      <button className="px-2" aria-label="Delete" type="button"><UilTrash size="20" color={transaction.color} /></button>
      <div className="flex justify-between w-full pr-2">
        <span>{transaction.name}</span>
        <span className="font-bold">{`$${transaction.amount}`}</span>
      </div>

    </div>
  );
}

Transaction.defaultProps = {
  transaction: PropTypes.shape({
    name: '',
    color: 'rgb(255, 205, 86)',
    type: '',
    amount: 0,
  }),
};

Transaction.propTypes = {
  transaction: PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.number,
  }),
};
export default History;
