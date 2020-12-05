import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import ChartContainer from './ChartContainer';

const cardList = [
    {
        title: "",
        size: 8,
        dataSet: {
            chartData: [0, 88, 30, 50, 20, 30],
            chartLabel: "Temperature",
            chartBackgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            chartBorderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'  
            ]
        }
    },
    {
        title: "",
        size: 8,
        dataSet: {
            chartData: [0, 8, 3, 5, 2, 3],
            chartLabel: "RPM Graph",
            chartBackgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            chartBorderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'  
            ]
        }
    },
    {
        title: "",
        size: 8,
        dataSet: {
            chartData: [0, 8, 3, 5, 2, 3],
            chartBackgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 99, 132, 0.2)'
            ],
            chartBorderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'  
            ]          
        }
    },
]

class CardContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
      }
    toggleBorder = () => {
        this.setState({loading : !this.state.loading})
    }
    render() {
        const {loading} = this.state;
        return(
            <div className="site-card-wrapper">
                <Row gutter={16}>
                    {cardList.map(card => 
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