import React from "react";
import './styles/style.css';
import FooterElement from './footer/FooterElement';
import { Form, Input, Button } from 'antd';
import LoginElement from "./LoginElement";

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
    const [form] = Form.useForm();
    const onCheck = async () => {
      try {
        const values = await form.validateFields();
        console.log('Success:', values);
      } catch (errorInfo) {
        console.log('Failed:', errorInfo);
      }
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
                      <LoginElement />
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