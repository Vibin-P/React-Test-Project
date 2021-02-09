import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, Anchor } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';

class PostForm extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     userId: '',
  //     title: '',
  //   }
  // }

  // changeHandler = (e) => {
  //   this.setState({[e.target.name]: e.target.value})
  // }

  // submitHandler = (e) => {
  //   e.preventDefault()
  //   console.log(this.state)
  //   axios.post('http://localhost/php-react/add-user.php', this.state, {headers:headers})
  //   .then(response =>{
  //     console.log(response)
  //   })
  //   .catch(error =>{
  //     console.log(error)
  //   })
  // }
  insertUser = (event) => {
    event.preventDefault();
    axios.post('http://localhost/php-react/add-user.php', {
      user_name: this.username.value,
      user_email: this.useremail.value
    })
    
      .then(function ({ data }) {
        if (data.success === 1) {
          debugger
          this.context.addNewUser(data.id, this.username.value, this.useremail.value);
          event.target.reset();
          // alert(data.msg);
          console.log(data)
        }
        else {
          alert(data.msg);
        }
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      });

  }

  render() {
    // const { userId, title } = this.state
    return (
      <div>
      <form onSubmit={this.insertUser}>
        <div>
        <input 
        type="text" 
        name="username" 
        placeholder="Name"
        ref={(val) => this.username = val}
        // value={userId}
        // onChange={this.changeHandler}  
        />
        </div>
        <div>
        <input 
        type="email" 
        name="useremail" 
        placeholder="Email"
        ref={(val) => this.useremail = val}
        // title={title}
        // onChange={this.changeHandler} 
        />
        </div>
        {/* <div>
        <input 
        type="text" 
        name="body" 
        body={body} 
        onChange={this.changeHandler}
        />
        </div> */}
        <button type="submit">Submit</button>
      </form>
      </div>
      // <div>
      //   <Form
      //     name="normal_login"
      //     className="login-form"
      //     onFinish={this.insertUser}
      //     initialValues={{ remember: true }}
      //     // onFinish={onFinish}
      //   >
      //     <Form.Item
      //       name="username"
      //       rules={[{ required: true, message: 'Please input your Username!' }]}
      //     >
      //       <Input 
      //       prefix={<UserOutlined className="site-form-item-icon" />}
      //       type="text"
      //       name="username"
      //       ref={(val) => this.username = val} 
      //       placeholder="Username" 
      //       />
      //     </Form.Item>
      //     <Form.Item
      //       name="password"
      //       rules={[{ required: true, message: 'Please input your Password!' }]}
      //     >
      //       <Input
      //         prefix={<LockOutlined className="site-form-item-icon" />}
      //         type="email"
      //         name="useremail"
      //         ref={(val) => this.useremail = val}
      //         placeholder="Password"
      //       />
      //     </Form.Item>
      //     <Form.Item>
      //       <Form.Item name="remember" valuePropName="checked" noStyle>
      //         <Checkbox>Remember me</Checkbox>
      //       </Form.Item>

      //       <a className="login-form-forgot" href="">
      //         Forgot password
      //        </a>
      //     </Form.Item>

      //     <Form.Item>
      //     {/* <button type="submit">Submit</button> */}
      //     <Button type="primary" htmlType="submit" className="login-form-button">
      //           Log in
      //     </Button>
      //           {/* Or <Link to="/RegisterPageElement">register now!</Link> */}
      //     </Form.Item>
      //   </Form>
      // </div>
    )
  }
}
export default PostForm;