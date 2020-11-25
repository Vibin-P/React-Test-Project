import { Button, Menu } from "antd";
import React, { Component } from "react";
import "../../public/styles/style.css";
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
  } from '@ant-design/icons';

  const { SubMenu } = Menu;



class MenuContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 'mail',
      collapsed: this.props.collapsed,
    }
    this.toggleCollapsed = this.toggleCollapsed.bind(this)
  }
 
    toggleCollapsed() {
      this.setState({
        collapsed: !this.state.collapsed,
      })
    }
    render() {
    return (
        <div>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>       
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>            
          </SubMenu>          
        </Menu>
      </div>
    );
}
}
export default MenuContainer;