import React from 'react';
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

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
    <div className="flex justify-center bg-red-500">
      <div className="max-w-xs bg-white flex flex-col gap-4 sm:w-3/4 w-full">
        <div className="relative">
          <Doughnut data={config.data} options={config.options} />
          <h1 className="text-xl chart-total">
            Total
            <span className="block text-emerald-500 font-bold text-3xl">$0</span>
          </h1>
        </div>
        <div className="bg-blue-500">Labels</div>
      </div>
    </div>
  );
}

export default Chart;
