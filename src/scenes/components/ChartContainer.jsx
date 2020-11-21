import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

class ChartContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data,
      label: this.props.label
    }
  }
  render() {
    const { data, label } = this.state
    return (
      <div>
        <Line
        height={200}
        data={{
          labels:['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: label,
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],

          }]
        }}
        options={{
          maintainAspectRatio:false,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
              }
            }]
          }
        }}
        />
      </div>
    );
  }
}
export default ChartContainer;