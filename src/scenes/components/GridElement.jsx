import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';

class GridElement extends Component {
    render() {
        return(
            <div className="site-grid-wrapper">
            <Row gutter={16}>
              <Col span={6}>
                <Card title="Temp Sensor 1" bordered={false}>
                  Sensor Value : 232
                </Card>
              </Col>
              <Col span={6}>
                <Card title="RPM" bordered={false}>
                  Sensor Value : 16000
                </Card>
              </Col>
              <Col span={6}>
                <Card title="Pressure Sensor" bordered={false}>
                  Sensor Value : 1.86
                </Card>
              </Col>
              <Col span={6}>
                <Card title="Temp Sensor 2" bordered={false}>
                  Sesor Value : 300
                </Card>
              </Col>
            </Row>
          </div>
        )
    }

}
export default GridElement;