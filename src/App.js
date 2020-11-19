import React from "react";
import './App.css';
import { Avatar, Breadcrumb, Col, Layout, Menu, Row, SubMenu } from 'antd';
import { UserOutlined, DashboardOutlined, BarChartOutlined } from '@ant-design/icons';
import Title from "antd/lib/typography/Title";
import MenuContainer from './scenes/components/MenuContainer';
import HeaderContainer from './scenes/components/HeaderContainer';
import CardContainer from './scenes/components/CardContainer';

const { Header, Footer, Sider, Content } = Layout;
const style = { background: '#001529', padding: '40px 0', color: '#fff'};

function App() { 
  return (
    <div className="App">
      <Layout>
        <Header>
          <HeaderContainer />
        </Header>
        <Layout>
        <Sider>
          <MenuContainer />
        </Sider>
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-content">Content
              <div className="Online">Offline</div>
                <div>
                  <CardContainer />
                </div>                
              </div>
            </Content>
            <Footer>© 2020 VAIGUNTH ENER TEK (P) LTD. ALL RIGHTS RESERVED</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}
export default App;

