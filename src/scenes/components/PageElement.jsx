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
    DashboardOutlined,
    TableOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    LogoutOutlined,
  } from '@ant-design/icons';
import CardContainer from './CardContainer';
import GridElement from './GridElement';
import TableElement from './TableElement';
import StatsBlock from './StatsBlock';

const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;

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
                <img src="./images/Logo-Vaigunth.png" alt="Logo" style={{width: '50px', height: '40px', marginTop: '8px', marginLeft: '15px'}} />
                { this.state.showCompanyName ? <LogoValue /> : null }
              </div>
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <div>
                <h5 className="sidebar-title">Main View</h5>
              </div>
                <Menu.Item className="dashboard-icon" key="1" icon={<DashboardOutlined />}>
                  Dashboard
                </Menu.Item>
                <div>
                <h5 className="sidebar-title">Reports</h5>
                </div>
                {/* <SubMenu key="sub1" icon={<TableOutlined />} title="Reports">
                <Menu.Item key="3">R1</Menu.Item>
                <Menu.Item key="4">R2</Menu.Item>
                <Menu.Item key="5">R3</Menu.Item>
                </SubMenu> */}
                
                <Menu.Item key="2" icon={<TableOutlined />}>
                  <text style={{marginBottom:'10px'}}>Report 1</text>
                </Menu.Item>
                <Menu.Item key="3" icon={<TableOutlined />}>
                  <text style={{marginBottom:'10px'}}>Report 2</text>
                </Menu.Item>
                <Menu.Item key="4" icon={<TableOutlined />}>
                  <text style={{marginBottom:'10px'}}>Report 3</text>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: this.toggle,
                })}

              <div class="logout-element">
                <a id="logout" href="#" class="nav-link">
                  <span class="logout-content">
                    Logout 
                    {/* <div style={{float:'right', marginTop:'6px'}}><LogoutOutlined /></div> */} 
                  </span>
                </a>
                <div className="welcome-message">
                <text>Welcome Admin</text>
              </div>
              </div>
              </Header>
              <div className="content-part">
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
                <CardContainer />
                {/* <TableElement /> */}
              </Content>
              </div>
              <FooterElement />
            </Layout>
          </Layout>
        )
    }
}
const LogoValue = () => (
  <div className="testlogo">ENERTEK ORC</div>
)
// const SidebarTitle = () => (
//   <div className="testsidebar"></div>
// )
export default PageElement;