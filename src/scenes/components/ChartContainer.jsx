import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

class ChartContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data,
      label: this.props.label,
      backgroundColor: this.props.backgroundColor,
      borderColor: this.props.borderColor
    }
  }
  render() {
    const { data, label, backgroundColor, borderColor } = this.state
    return (
      <div>
        <Line
        height={200}
        data={{
          labels:['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: label,
            data: data,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderWidth: 1
          }]
        }}
        options={{
          maintainAspectRatio:false,
          scales: {
            xAxes: [{
              gridLines: {
                color: 'rgba(255, 255, 255, 0.1)',
              },
            }],
            yAxes: [{
              gridLines: {
                color: 'rgba(255, 255, 255, 0.1)',
              },
              ticks: {
                  min: 0,
                  max: 200,
                  fontColor: 'rgba(255, 255, 255, 0.5)',
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