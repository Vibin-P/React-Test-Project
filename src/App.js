import React from 'react';
import { Layout } from 'antd';
import PageElement from './scenes/components/PageElement';
import RunningReport from './scenes/components/RunningReport';

const style = { background: '#001529', padding: '40px 0', color: '#fff' };

class App extends React.Component {
  render() {
    return (
      <Layout>
        {/* <PageElement /> */}
        <RunningReport />
      </Layout>
    );
  }
}
export default App;

