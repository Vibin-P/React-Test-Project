import React, { Component } from "react";
import { Card, Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader, Button } from 'antd';
import TableElement from './TableElement';

const { Option } = Select;

const options1 = [
  {
    value: 'report1',
    label: 'Report1',
  },
  {
    value: 'report2',
    label: 'Report2',
  },
];

const options2 = [
  {
    value: 'report3',
    label: 'Report3',
  },
  {
    value: 'report4',
    label: 'Report4',
  },
];


class InputElement extends Component {
  render() {
    return (
      <div>
        <div className="input-content">
          <Card title="Running Report">
            <div className="input-element">
              <Input.Group compact>
                <label>Turbine<br></br> ID<i style={{ color: 'red', fontSize: '10px' }}>*</i></label>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Cascader style={{ width: '35%', background: '#292929', borderBlockColor: 'rgba(255, 255, 255, 0.5)' }} options={options1} placeholder="Select Address" />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <label>Test<br></br> NO<i style={{ color: 'red', fontSize: '10px' }}>*</i></label>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Cascader style={{ width: '35%', background: '#292929', borderBlockColor: 'rgba(255, 255, 255, 0.5)' }} options={options2} placeholder="Select Address" />
              </Input.Group>
            </div>
            <Button type="primary" style={{ marginLeft: '34.5%' }}>View</Button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Button type="primary">Clear</Button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Button type="primary" style={{ marginLeft: '23.5%' }}>Excel</Button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Button type="primary">Pdf</Button>
          </Card>
        </div>
        <div className="report-element">
          <Card title="Enertek">
            <h1>Running Report</h1>
            <table id="report-constants">
              <tr>
                <th style={{ width: '217px' }}>ATR REF. NO </th>
                <th>TC/0/01</th>
              </tr>
              <tr>
                <td>ATP REF. NO </td>
                <td>2002 TRS/86</td>
              </tr>
              <tr>
                <td>PART NUMBER</td>
                <td>sb3336-00-011/sb337-100SB</td>
              </tr>
              <tr>
                <td>PART NAME</td>
                <td>Turbocharger</td>
              </tr>
              <tr>
                <td>SERIAL NUMBER</td>
                <td>Name</td>
              </tr>
            </table>
            <TableElement />
            <div class="row" style={{ marginTop: '20px' }}>
              <div class="col-lg-1">
              </div>
              <div class="col-lg-4">
                <label><b><u>Tested By:</u></b></label>
                <br />
                <table>
                  <tr ng-repeat="tb in TestedBy">
                    <td>tb.TesterName</td>
                  </tr>
                </table>
              </div>
              <div class="col-lg-2">
              </div>
              <div class="col-lg-4">
                <label><b><u>Witnessed By:</u></b></label>
                <br />
                <table>
                  <tr ng-repeat="wn in WitnessName">
                    <td>wn.Witness</td>
                  </tr>
                </table>
              </div>
              <div class="col-lg-1">
              </div>
            </div>
          </Card>
        </div>
      </div>
    )
  }
}
export default InputElement;