import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import ChartContainer from './ChartContainer';

const cardList = [
    {
        title: "Critical Temp Graph",
        size: 8
    },
    {
        title: "RPM Graph",
        size: 8
    },
    {
        title: "Critical Pressure Graph",
        size: 8
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
                            <ChartContainer />
                            </Card>
                        </Col>
                        )}              
                </Row>
            </div>
        );
    }
}
export default CardContainer;