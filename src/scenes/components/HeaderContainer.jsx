import React, { Component } from 'react';
import "../../public/styles/style.css";
import { PageHeader } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { UserOutlined } from '@ant-design/icons';



class HeaderContainer extends Component {
    render(){
    return (
        <div>
            <PageHeader
                className="site-page-header"
                title="Vaigunth"
            />
            <Avatar 
                className="user-icon"
                icon={<UserOutlined />} 
            />
        </div>
    );
}
}
export default HeaderContainer;