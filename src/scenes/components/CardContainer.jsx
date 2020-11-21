import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import ChartContainer from './ChartContainer';

const cardList = [
    {
        title: "Critical Temp Graph",
        size: 8,
        dataSet: {
            chartData: [0, 8, 3, 5, 2, 3],
            chartLabel: "Temperature"
        }
    },
    {
        title: "RPM Graph",
        size: 8,
        dataSet: {
            chartData: [0, 8, 3, 5, 2, 3],
            chartLabel: "RPM Graph"
        }
    },
    {
        title: "Critical Pressure Graph",
        size: 8,
        dataSet: {
            chartData: [0, 8, 3, 5, 2, 3]            
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