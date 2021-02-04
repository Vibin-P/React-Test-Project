import React, { Component } from "react";
import { Card, Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader, Button } from 'antd';
import TableElement from './TableElement';
import moment from 'moment';

const { RangePicker } = DatePicker;

class InputElement extends Component {
  render() {
    return (
      <div>
        <div className="input-content">
          <Card title="Running Report">
            <div className="input-element">
              <Input.Group compact>
                <label>Date<br></br> Time<i style={{ color: 'red', fontSize: '10px' }}>*</i></label>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <RangePicker
                  ranges={{
                    Today: [moment(), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                  }}
                  showTime
                  format="YYYY/MM/DD HH:mm:ss" 
                  style={{ width: '35%', background: '#292929', borderBlockColor: 'rgba(255, 255, 255, 0.5)' }} 
                  />
              </Input.Group>
            </div>
              <Button type="primary" style={{ marginLeft: '15%' }}>View</Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button type="primary">Clear</Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button type="primary" style={{ marginLeft: '4%' }}>Excel</Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button type="primary">Pdf</Button>
            </Card>
        </div>
        <div className="report-element">
          <Card>
          <img src="./images/Logo-Vaigunth.png" alt="Logo"  style={{width: '50px', height: '40px', marginTop: '6px', marginLeft: '15px'}} />
            <h1>Running Report</h1>
            <table class="report-constants">
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