import React from 'react';
import { Layout } from 'antd';
import PageElement from './scenes/components/PageElement';
import Loginpage from './scenes/components/Loginpage';
import '../src/scenes/components/styles/style.css';

 
const style = { background: '#001529', padding: '40px 0', color: '#fff' };

class App extends React.Component {
  render() {
    return (
        <Layout>
          <PageElement />
          {/* <Loginpage /> */}
        </Layout>
    );
  }
}
export default App;

