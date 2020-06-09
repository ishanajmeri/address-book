import React, { Component } from 'react';
import { Card, Form, Input, Button } from 'antd';

class SignUp extends Component {
  state = {};
  render() {
    const onFinish = (values) => {
      console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
    return (
      <Card
        style={{
          backgroundImage: 'url(https://i.picsum.photos/id/10/2500/1667.jpg)',
          backgroundSize: 'cover',
          marginLeft: '15%',
          marginRight: '15%',
          paddingBottom: '15%',
        }}
      >
        <div
          style={{
            marginLeft: '75%',
            marginTop: '5%',
            marginRight: '-15%',
            // backgroundColor: 'yellow',
          }}
        >
          <h3>SIGN UP</h3>
          <Form
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                  message: 'name is invalid',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  type: 'email',
                  message: 'email is invalid',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item name="phone" label="Phone">
              <Input />
            </Form.Item>
            <Form.Item>
              <Button shape="round">Sign Up</Button>
            </Form.Item>
          </Form>
        </div>
      </Card>
    );
  }
}

export default SignUp;
