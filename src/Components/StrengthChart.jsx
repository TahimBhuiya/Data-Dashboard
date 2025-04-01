import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components for chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StrengthChart = ({ heroes }) => {
  const strengthData = heroes.map(hero => parseInt(hero.powerstats.strength, 10));

  const chartData = {
    labels: heroes.map(hero => hero.name), // Hero names as labels
    datasets: [
      {
        label: 'Strength',
        data: strengthData,
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Light green color
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <h3>Strength Distribution</h3>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default StrengthChart;
