import React, { Component } from "react";
import { Breadcrumb, Layout } from 'antd';
import CardContainer from '../CardContainer';
import ButtonElement from '../ButtonElement';

class MainContainer extends Component {
    constructor(props) {
        super(props)       
    }
    render () {   
        return ( 
        <Layout>
            <ButtonElement />
            <div style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">Content
                <div className="Online">Offline</div>
                    <div>
                    <CardContainer />
                    </div>                
                </div>
            </div>           
        </Layout> 
        )
    }
}
export default MainContainer;

