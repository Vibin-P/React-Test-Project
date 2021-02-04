import React, { Component } from "react";
import { DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker } = DatePicker;

class DateTimeElement extends Component {
  render() {
    return(
      <RangePicker
      ranges={{
        Today: [moment(), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
      }}
      showTime
      format="YYYY/MM/DD HH:mm:ss"
      // onChange={onChange}
    />
    )
  }
}
export default DateTimeElement;