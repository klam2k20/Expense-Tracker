import React from 'react';
import PropTypes from 'prop-types';
import UilTrash from '@iconscout/react-unicons/icons/uil-trash-alt';

import { useGetLabelsQuery, useDeleteTransactionMutation } from '../store/apiSlice';

function History() {
  const {
    data, isFetching, isSuccess, isError, error,
  } = useGetLabelsQuery();
  let content;

  if (isFetching) {
    content = <div>Loading...</div>;
  } else if (isSuccess) {
    const transactions = data.slice(0, 5);
    content = transactions.map((transaction) => (
      <Transaction
        key={transaction._id}
        transaction={transaction}
      />
    ));
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
  const [api] = useDeleteTransactionMutation();
  const onClickHandler = () => {
    api({ _id: transaction._id });
  };

  if (!transaction) return <></>;
  return (
    <div
      className="flex justify-center bg-gray-50 rounded-r py-2"
      style={{ borderRight: `0.5rem solid ${transaction.color}` }}
    >
      <button
        className="px-2"
        aria-label="Delete"
        type="button"
        onClick={onClickHandler}
      >
        <UilTrash size="25" color={transaction.color} />
      </button>
      <div className="flex justify-between w-full pr-2">
        <span>{transaction.name}</span>
        <span className="font-bold">{`$${transaction.amount}`}</span>
      </div>

    </div>
  );
}

Transaction.propTypes = {
  transaction: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    color: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.number,
  }).isRequired,
};
export default History;
