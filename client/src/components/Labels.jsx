import React from 'react';
import PropTypes from 'prop-types';
import { useGetLabelsQuery } from '../store/apiSlice';
import getLabels from '../utilities/utilities';

function Labels() {
  const {
    data, isFetching, isSuccess, isError, error,
  } = useGetLabelsQuery();

  let content;
  if (isFetching) {
    content = <div>Loading...</div>;
  } else if (isSuccess) {
    content = getLabels(data, 'type').map((category) => <Label key={category._id} category={category} />);
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      {content}
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
        {Math.round(category.percent)}
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
