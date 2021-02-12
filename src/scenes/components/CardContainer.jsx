import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import ChartContainer from './ChartContainer';
import axios from 'axios';

class CardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            cardList: []
        }
      }

     interval = setInterval(() => {
      this.requestChartData();
      }, 1000);

      requestChartData() {
        axios.get('http://192.168.0.167/orc/graph.php')
          .then(res => {
            this.state.cardList = [];
            console.log(res.data);

            let chartdata = res.data;
            let t1 = [];
            let t2 = [];
            let t9 = [];
            let rpm = [];
            let p2 = [];
            let date_Time = [];
            for(let i=0; i<chartdata.length; i++){
              t1.push(chartdata[i].T1);
              t2.push(chartdata[i].T2);
              t9.push(chartdata[i].T9);
              rpm.push(chartdata[i].RPM);
              p2.push(chartdata[i].P2);
              date_Time.push(new Date(chartdata[i].date_Time).toLocaleTimeString([], {hour12: false}));
            }
            let chartArray = [];
            chartArray.push(t1);
            chartArray.push(t2);
            chartArray.push(t9);
            chartArray.push(rpm);
            chartArray.push(p2);
            for(let i=0; i<chartArray.length; i++){
            let chart = 
            {
                title: "chart-"+(i+1),
                size: 8,
                labels: date_Time,
                dataSet: {
                    chartData: chartArray[i],
                    chartLabel: "Temperature",
                    chartBackgroundColor: [
                        'rgba(255, 99, 132, 0.1)',
                        'rgba(54, 162, 235, 0.1)',
                        'rgba(255, 206, 86, 0.1)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    chartBorderColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)' 
                    ]
                }
            }
            this.forceUpdate();
            this.state.cardList.push(chart);
            this.forceUpdate();
          }
          })
          .catch(err => {
            console.log(err);
          })
      }

    toggleBorder = () => {
        this.setState({loading : !this.state.loading})
    }
    render() {
      const {loading} = this.state;
        return(
          <div className="site-card-wrapper">
            <Row gutter={16}>
              {this.state.cardList.map(card => 
                <Col span={card.size}>
                  <Card>{card.title}
                    <ChartContainer 
                      data={card.dataSet.chartData ? card.dataSet.chartData : []}
                      labels={card.labels ? card.labels : []}
                      label={card.dataSet.chartLabel ? card.dataSet.chartLabel : "No Lebel"}
                      backgroundColor={card.dataSet.chartBackgroundColor ? card.dataSet.chartBackgroundColor : []}
                      borderColor={card.dataSet.chartBorderColor ? card.dataSet.chartBorderColor: []}
                      />
                  </Card>
                </Col>
              )}              
            </Row>
          </div>
        );
    }
}
export default CardContainer;