import React from "react";
import { Layout } from 'antd';
import './App.css';
import HeaderContainer from './scenes/components/HeaderContainer';
import MenuContainer from './scenes/components/MenuContainer';
import MainContainer from "./scenes/components/main/MainContainer";

const { Header, Footer, Sider, Content } = Layout;
const style = { background: '#001529', padding: '40px 0', color: '#fff' };

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Sider><MenuContainer /></Sider>
        <Layout>
          <Header><HeaderContainer /></Header>
          <Content><MainContainer /></Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}
export default App;

