import React from 'react';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import Labels from './Labels';
import { getDoughnutConfigs, getTotal } from '../utilities/utilities';
import { useGetLabelsQuery } from '../store/apiSlice';

ChartJS.register(ArcElement);

function Chart() {
  const {
    data, isFetching, isSuccess, isError, error,
  } = useGetLabelsQuery();

  let content;
  if (isFetching) {
    content = <div>Loading...</div>;
  } else if (isSuccess) {
    const config = getDoughnutConfigs(data);
    content = <Doughnut data={config.data} options={config.options} />;
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <div className="flex justify-center py-8">
      <div className="max-w-xs flex flex-col items-center gap-8 sm:w-3/4 w-full px-4">
        <div className="relative">
          {content}
          <h1 className="text-xl chart-total">
            Total
            <span className="block text-emerald-500 font-bold text-3xl">
              $
              {getTotal(data) ?? 0}
            </span>
          </h1>
        </div>
        <Labels />
      </div>
    </div>
  );
}

export default Chart;
