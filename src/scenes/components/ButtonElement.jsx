import React, { Component } from 'react';
import { Button } from "antd";
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
  } from '@ant-design/icons';


class ButtonElement extends Component {
    state = {
        current: 'mail',
        collapsed: false,
      };
      toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };

    render() {
        return(

            <div>
                <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </Button>
            </div>
        );
    }
}
export default ButtonElement;