import React from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components for chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const IntelligenceStrengthChart = ({ heroes }) => {
  const intelligenceData = heroes.map(hero => parseInt(hero.powerstats.intelligence, 10));
  const strengthData = heroes.map(hero => parseInt(hero.powerstats.strength, 10));

  const chartData = {
    datasets: [
      {
        label: 'Strength vs Intelligence',
        data: heroes.map((hero, index) => ({
          x: strengthData[index],
          y: intelligenceData[index],
          label: hero.name,
        })),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        pointRadius: 6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Strength',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Intelligence',
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <h3>Intelligence vs Strength</h3>
      <Scatter data={chartData} options={chartOptions} />
    </div>
  );
};

export default IntelligenceStrengthChart;
