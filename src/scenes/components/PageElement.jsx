import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import FooterElement from './footer/FooterElement';
import TableContainer from './TableContainer';
import './styles/style.css';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';
import CardContainer from './CardContainer';
import GridElement from './GridElement';
import TableElement from './TableElement';
import StatsBlock from './StatsBlock';

const { Header, Sider, Content } = Layout;

class PageElement extends Component {
    state = {
        collapsed: false,
        showCompanyName: true,
      };
    
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
          showCompanyName: this.state.showCompanyName ? false : true,
        });
      };
    
    render() {
        return(
            <Layout>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <div className="logo">
                <img src="./images/logo1.png" alt="Logo" style={{width: '50px', height: '40px'}} />
                { this.state.showCompanyName ? <LogoValue /> : null }
              </div>
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                  nav 1
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                  nav 2
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                  nav 3
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: this.toggle,
                })}
              </Header>
              <Content
                className="site-layout-background"
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  minHeight: 280,
                }}
              >
                {/* <GridElement /> */}
                <StatsBlock />
                <CardContainer />
                <TableElement />
              </Content>
              <FooterElement />
            </Layout>
          </Layout>
        )
    }
}
const LogoValue = () => (
  <div className="testlogo">ENERTEK ORC</div>
)
export default PageElement;