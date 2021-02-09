import React from "react";
import './styles/style.css';
import FooterElement from './footer/FooterElement';
import { Form, Input, Button, Checkbox, Anchor } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { BrowserRouter as Router,	Route, Link, Switch as SW } from 'react-router-dom';
import axios from 'axios';
import LoginElement from "./LoginElement";
import PageElement from "./PageElement";

const headers = {
  "x-apikey": "59a7ad19f5a9fa0808f11931",
 " Access-Control-Allow-Origin":"*",
 "Access-Control-Allow-Methods" : "GET,PUT,POST,DELETE,PATCH,OPTIONS"
}

const formItemLayout = {
  labelCol: {
    span: 4,
  },  
  wrapperCol: {
    span: 8,
  },
};
const formTailLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
    offset: 4,
  },
};

const TestPage = () => {
    // const [form] = Form.useForm();
    // const onCheck = async () => {
    //   try {
    //     const values = await form.validateFields();
    //     console.log('Success:', values);
    //   } catch (errorInfo) {
    //     console.log('Failed:', errorInfo);
    //   }
    // };
    const onFinish = (values) => {
      axios.post('http://localhost/php-react/add-user.php', 
      values,
      )
      
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err.res)
      })
    };
    return(
      <div class="background">
        <div class="login-page">
          <div class="container d-flex align-items-center">
            <div class="form-holder has-shadow">
              <div class="row">
                {/* <!-- Logo & Information Panel--> */}
                <div class="col-lg-6">
                  <div class="info d-flex align-items-center">
                    <div class="content">
                      <div class="logo">
                        <h1 style={{color:'white'}}>EnerTek ORC</h1>
                      </div>
                      <p>A product powerd by Vaigunth EnerTek (Pvt.) Ltd.</p>
                    </div>
                  </div>
                </div>
                {/* <!-- Form Panel    --> */}
                <div class="col-lg-6">
                  <div class="form d-flex align-items-center">
                    <div class="content">
                      {/* <Form form={form} name="dynamic_rule">
                        <Form.Item
                          {...formItemLayout}
                          name="username"
                          label="Name"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your name',
                            },
                          ]}
                        >
                          <Input placeholder="Please input your name" style={{background: '#292929', color: '#fff'}} />
                        </Form.Item>
                        <Form.Item {...formTailLayout}>
                          <Button type="primary" onClick={onCheck}>
                            Check
                          </Button>
                        </Form.Item>
                      </Form> */}
                      {/* <LoginElement /> */}
                        <Form
                          name="normal_login"
                          className="login-form"
                          initialValues={{ remember: true }}
                          onFinish={onFinish}
                        >
                          <Form.Item
                            name="user_name"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                          >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                          </Form.Item>
                          <Form.Item
                            name="user_email"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                          >
                            <Input
                              prefix={<LockOutlined className="site-form-item-icon" />}
                              type="email"
                              placeholder="email"
                            />
                          </Form.Item>
                          {/* <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                              <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                              Forgot password
                            </a>
                          </Form.Item> */}

                          <Form.Item> 
                            <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                            </Button>
                            {/* Or <Link to="/RegisterPageElement">register now!</Link> */}
                          </Form.Item>
                          </Form>
                      {/* <a href="#" class="forgot-pass">Forgot Password?</a><br></br><small>Do not have an account? </small>
                      <a href="#" class="signup">Signup</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FooterElement />
        </div>
      </div>
    )
  }
export default TestPage;