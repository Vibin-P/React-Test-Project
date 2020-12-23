import React, { Component } from "react";
import { Table } from 'antd';

const columns = [
    {
        title: 'Product',
        dataIndex: 'product',
    },
    {
       title:  'Value',
       dataIndex: 'value',
    },
    {
        title: 'Range',
        dataIndex: 'range',
    },
    {
        title: 'Status',
        dataIndex: 'status'
    }
];
const data = [
    {
        key: '1',
        product: 'Temp Sensor',
        value: '250',
        range: '0 to 300',
        status: 'Live'
    },
    {
        key: '2',
        product: 'Rpm Sensor',
        value: '12500',
        range: '0 to 55000',
        status: 'Live'
    },
    {
        key: '3',
        product: 'Pressure Sensor',
        value: '0.102',
        range: '0 to 5',
        status: 'Live'
    },
    {
        key: '4',
        product: 'DPT Sensor',
        value: '14',
        range: '0 to 5',
        status: 'Live'
    },
];

class TableContainer extends Component {
    render() {
        return(
            <div>
                <h4>Table Content</h4>
                <Table columns={columns} dataSource={data} size="small" />
            </div>
        )
    }
}
export default TableContainer;