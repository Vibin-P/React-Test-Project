import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import ChartContainer from './ChartContainer';
import axios from 'axios';

// const cardList = [
//     // {
//     //     title: "",
//     //     size: 8,
//     //     dataSet: {
//     //         chartData: [0, 88, 30, 50, 20, 30],
//     //         chartLabel: "Temperature",
//     //         chartBackgroundColor: [
//     //             'rgba(255, 99, 132, 0.1)',
//     //             'rgba(54, 162, 235, 0.1)',
//     //             'rgba(255, 206, 86, 0.1)',
//     //             'rgba(75, 192, 192, 0.1)',
//     //             'rgba(153, 102, 255, 0.1)',
//     //             'rgba(255, 99, 132, 0.1)'
//     //         ],
//     //         chartBorderColor: [
//     //             'rgba(255, 99, 132, 0.6)',
//     //             'rgba(54, 162, 235, 0.6)',
//     //             'rgba(255, 206, 86, 0.6)',
//     //             'rgba(75, 192, 192, 0.6)',
//     //             'rgba(153, 102, 255, 0.6)',
//     //             'rgba(255, 159, 64, 0.6)'  
//     //         ]
//     //     }
//     // },
//     // {
//     //     title: "",
//     //     size: 8,
//     //     dataSet: {
//     //         chartData: [0, 8, 3, 5, 2, 3],
//     //         chartLabel: "RPM Graph",
//     //         chartBackgroundColor: [
//     //             'rgba(255, 99, 132, 0.2)',
//     //             'rgba(54, 162, 235, 0.2)',
//     //             'rgba(255, 206, 86, 0.2)',
//     //             'rgba(75, 192, 192, 0.2)',
//     //             'rgba(153, 102, 255, 0.2)',
//     //             'rgba(255, 99, 132, 0.2)'
//     //         ],
//     //         chartBorderColor: [
//     //             'rgba(255, 99, 132, 1)',
//     //             'rgba(54, 162, 235, 1)',
//     //             'rgba(255, 206, 86, 1)',
//     //             'rgba(75, 192, 192, 1)',
//     //             'rgba(153, 102, 255, 1)',
//     //             'rgba(255, 159, 64, 1)'  
//     //         ]
//     //     }
//     // },
//     // {
//     //     title: "",
//     //     size: 8,
//     //     dataSet: {
//     //         chartData: [0, 8, 3, 5, 2, 3],
//     //         chartBackgroundColor: [
//     //             'rgba(255, 99, 132, 0.2)',
//     //             'rgba(54, 162, 235, 0.2)',
//     //             'rgba(255, 206, 86, 0.2)',
//     //             'rgba(75, 192, 192, 0.2)',
//     //             'rgba(153, 102, 255, 0.2)',
//     //             'rgba(255, 99, 132, 0.2)'
//     //         ],
//     //         chartBorderColor: [
//     //             'rgba(255, 99, 132, 1)',
//     //             'rgba(54, 162, 235, 1)',
//     //             'rgba(255, 206, 86, 1)',
//     //             'rgba(75, 192, 192, 1)',
//     //             'rgba(153, 102, 255, 1)',
//     //             'rgba(255, 159, 64, 1)'  
//     //         ]          
//     //     }
//     // },
// ]


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
      }, 3000);
//  data = [{T1:20,T2:30,T9:70},{T1:20,T2:10,T9:5},{T1:50,T2:0,T9:70}]
//  interval = setInterval(() => {
//   this.data[1].T9 = 40;
//   }, 10000);
      requestChartData() {
        // let rpmVal = [];

        axios.get('http://192.168.0.157/orc/')
          .then(res => {
            this.state.cardList = [];
            console.log(res.data);
            // for(const dataObj of res.data) {
            //   rpmVal.push(parseInt(dataObj.rpm_value))
            // }

            let chartdata = res.data;
            let t1 = [];
            let t2 = [];
            let t9 = [];
            for(let i=0; i<chartdata.length; i++){
              t1.push(chartdata[i].T1);
              t2.push(chartdata[i].T2);
              t9.push(chartdata[i].T9);
            }
            let chartArray = [];
            chartArray.push(t1);
            chartArray.push(t2);
            chartArray.push(t9);
            for(let i=0; i<chartArray.length; i++){
            let chart = 
            {
                title: "chart-"+(i+1),
                size: 8,
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