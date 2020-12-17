import React from "react";
import { Layout } from 'antd';
import PageElement from "./scenes/components/PageElement";

const style = { background: '#001529', padding: '40px 0', color: '#fff' };

class App extends React.Component {
  render() {
    return (
      <Layout>
        <PageElement />
      </Layout>
    );
  }
}
export default App;

