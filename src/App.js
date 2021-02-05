import React from 'react';
import { Layout } from 'antd';
import PageElement from './scenes/components/PageElement';
import Loginpage from './scenes/components/Loginpage';
import '../src/scenes/components/styles/style.css';
import ListData from './scenes/components/ListData';
import axios from 'axios';
import DateTimeElement from './scenes/components/DateTimeElement';
import Registerpage from './scenes/components/Registerpage';
import TestPage from './scenes/components/TestPage';
import LoginElement from './scenes/components/LoginElement';
import RegisterElement from './scenes/components/RegisterElement';
import RegisterPageElement from './scenes/components/RegisterPageElement';

const style = { background: '#001529', padding: '40px 0', color: '#fff' };

class App extends React.Component {

  state = {
    data: []
  }

  componentDidMount() {
    axios.get(`http://192.168.0.167/orc/index.php`)
      .then(res => {
        const {data} = res;
        this.setState({ data });
      })
  }

  render() {
    return (
        <Layout>
          {/* <PageElement sensorData = {this.state.data} /> */}
          {/* <Loginpage /> */}
           {/* <Registerpage /> */}
          {/* <ListData /> */}
          {/* <DateTimeElement /> */}
          <TestPage />
          {/* <LoginElement /> */}
          {/* <RegisterElement /> */}
          {/* <RegisterPageElement /> */}
        </Layout>
    );
  }
}
export default App;

