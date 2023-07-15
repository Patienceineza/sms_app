import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false, 
  plugins: {
    legend: {
      position: 'top' as const,
    },
 
  },
};

const labels = ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6', 'Month 7', 'Month 8', 'Month 9'];

const data = {
  labels,
  datasets: [
    {
      label: 'Message Balance',
      data: [1000, 2000, 5000, 200, 800, 350, 700, 900, 1200], // Replace with your own data values
      backgroundColor: 'rgba(255, 99, 132, 0.8)',
    },
    {
      label:  'Message sent',
      data: [700, 250, 400, 550, 300, 600, 350, 450, 300], // Replace with your own data values
      backgroundColor: '#646EDA',
    },
  ],
};

export function App() {
  return (
  
      <Bar options={options} data={data} />
   
  );
}
