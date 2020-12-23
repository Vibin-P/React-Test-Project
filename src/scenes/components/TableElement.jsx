import React, { Component } from "react";
import { Table } from 'react-bootstrap';
import './styles/style.css';

const datas = [
    {product: 'Temp Sensor', value: '250', range: '0 to 300', unit: 'Degree'},
    {product: 'Rpm Sensor', value: '12500', range: '0 to 55000', unit: 'rpm'},
    {product: 'Pressure Sensor', value: '0.102', range: '0 to 5', unit: 'Bar'},
    {product: 'DPT Sensor', value: '14', range: '0 to 5', unit: 'PSI'},
];

class TableElement extends Component {
    render() {
        return(
            <div className="tableElement">
            <h5>Table Element</h5><br></br>
            <Table className="table table-striped table-dark">
                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Value</th>
                        <th>Range</th>
                        <th>Unit</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        datas.map((item,i)=>
                        <tr key={i}>
                        <td>{item.product}</td>
                        <td>{item.value}</td>
                        <td>{item.range}</td>
                        <td>{item.unit}</td>
                    </tr>)
                    }
                </tbody>
            </Table>
            </div>
        )
    }
}
export default TableElement;