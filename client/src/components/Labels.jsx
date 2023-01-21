import React from 'react';
import PropTypes from 'prop-types';

const categories = [
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

function Labels() {
  return (
    <div className="flex flex-col gap-4 w-full">
      {categories.map((category) => <Label category={category} />)}
    </div>
  );
}

function Label({ category }) {
  if (!category) return <></>;
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <div className="w-2 h-2 py-3 rounded-md" style={{ background: category.color }} />
        <span className="font-light">{category.type}</span>
      </div>
      <span className="font-bold">
        {category.percent}
        %
      </span>
    </div>
  );
}

Label.defaultProps = {
  category: PropTypes.shape({
    color: 'rgb(255, 205, 86)',
    type: '',
    percent: 0,
  }),
};

Label.propTypes = {
  category: PropTypes.shape({
    color: PropTypes.string,
    type: PropTypes.string,
    percent: PropTypes.number,
  }),
};

export default Labels;
