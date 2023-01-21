import React from 'react';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Labels from './Labels';

ChartJS.register(ArcElement);

const config = {
  data: {
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
      ],
      hoverOffset: 4,
      space: 10,
      borderRadius: 30,
    }],
  },
  options: {
    cutout: 115,
  },
};

function Chart() {
  return (
    <div className="flex justify-center py-8">
      <div className="max-w-xs flex flex-col items-center gap-8 sm:w-3/4 w-full px-4">
        <div className="relative">
          <Doughnut data={config.data} options={config.options} />
          <h1 className="text-xl chart-total">
            Total
            <span className="block text-emerald-500 font-bold text-3xl">$0</span>
          </h1>
        </div>
        <Labels />
      </div>
    </div>
  );
}

export default Chart;
