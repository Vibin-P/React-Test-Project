import React, { Component } from 'react';
import { Layout, Menu, Switch } from 'antd';
import 'antd/dist/antd.css';
import FooterElement from './footer/FooterElement';
import './styles/style.css';

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    DashboardOutlined,
    TableOutlined,
    PoweroffOutlined,
  } from '@ant-design/icons';
import StatsBlock from './StatsBlock';
import { BrowserRouter as Router,	Route, Link, Switch as SW } from 'react-router-dom';
import InputElement from './InputElement';
import TableElement from './TableElement';
import CardContainer from './CardContainer';
import Loginpage from './Loginpage';

const { Header, Sider, Content } = Layout;
// const { SubMenu } = Menu;

class PageElement extends Component {
    state = {
        collapsed: false,
        showCompanyName: true,
        showMainViewSideBarText: true,
        showReportsSideBarText: true
      };
    
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
          showCompanyName: this.state.showCompanyName ? false : true,
          showMainViewSideBarText: this.state.showMainViewSideBarText ? false : true,
          showReportsSideBarText: this.state.showReportsSideBarText ? false : true
        });
      };
    
    render() {
        return(
          <Router>
            <Layout>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <div className="logo">
                <img src="./images/Logo-Vaigunth.png" alt="Logo" style={{width: '50px', height: '40px', marginTop: '6px', marginLeft: '15px'}} />
                { this.state.showCompanyName ? <LogoValue /> : null }
              </div>
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <div>
                {this.state.showMainViewSideBarText ? <MainViewSideBar/> : null}
              </div>
                <Menu.Item className="dashboard-icon" key="1" icon={<DashboardOutlined />}>
                  <text style={{marginTop:'10px'}}>
                    <Link to="/dashboard" style={{textDecoration: 'none', color: '#fff'}}>Dashboard</Link>
                  </text>
                </Menu.Item>
                <div>
                {this.state.showReportsSideBarText ? <ReportsSideBar /> : null}
                </div>
                {/* <SubMenu key="sub1" icon={<TableOutlined />} title="Reports">
                <Menu.Item key="3">R1</Menu.Item>
                <Menu.Item key="4">R2</Menu.Item>
                <Menu.Item key="5">R3</Menu.Item>
                </SubMenu> */}
                
                <Menu.Item key="2" icon={<TableOutlined />}>
                  <text style={{marginBottom:'10px'}}>
                    <Link to="/runningreport1" style={{textDecoration: 'none', color: '#fff'}}>Running Report 1</Link>
                  </text>
                </Menu.Item>
                <Menu.Item key="3" icon={<TableOutlined />}>
                  <text style={{marginBottom:'10px'}}>
                    <Link to="/runningreport2" style={{textDecoration: 'none', color: '#fff'}}>Running Report 2</Link>
                  </text>
                </Menu.Item>
                <Menu.Item key="4" icon={<TableOutlined />}>
                  <text style={{marginBottom:'10px'}}>
                    <Link to="/runningreport3" style={{textDecoration: 'none', color: '#fff'}}>Running Report 3</Link>
                  </text>
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
                    <Link to="/logout">Logout <PoweroffOutlined /></Link>
                    {/* <div style={{float:'right', marginTop:'6px'}}><PoweroffOutlined /></div>  */}
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
                <div className="switch-content">
                  Service : &nbsp;
                <Switch size="small" defaultChecked />
                </div>
              <SW> 
                <Route exact path='/dashboard' component={StatsBlock}></Route>
                <Route exact path='/runningreport1' component={InputElement}></Route>
                <Route exact path='/runningreport2' component={TableElement}></Route>
                <Route exact path='/runningreport3' component={CardContainer}></Route>
                <Route exact path='/logout' component={Loginpage}></Route> 
              </SW>
                {/* <StatsBlock /> */}
                
              </Content>
              </div>
              <FooterElement />
            </Layout>
          </Layout>
          </Router>
        )
    }
}
const LogoValue = () => (
  <div className="testlogo">ENERTEK ORC</div>
)
const MainViewSideBar = () => (
  <h5 className="sidebar-title">Main View</h5>
)
const ReportsSideBar = () => (
  <h5 className="sidebar-title">Reports</h5>
)
export default PageElement;