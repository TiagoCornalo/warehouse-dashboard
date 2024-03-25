import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

interface DataRecord {
  date: string;
  stock: number;
}

interface LineChartProps {
  data: DataRecord[];
}

const LineChart = ({ data }: LineChartProps) => {
  const chartData = {
    labels: data.map(d => d.date),
    datasets: [
      {
        label: 'Stock',
        data: data.map(d => d.stock),
        fill: false,
        /* cc1c42 */
        backgroundColor: '#cc1c42',
        borderColor: '#cc1c42',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
        },
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
        },
      },
    },
  };

  return <Line data={chartData} options={options} width={'100%'} style={{
    maxHeight: '400px',
  }}/>;
}

export default LineChart;
