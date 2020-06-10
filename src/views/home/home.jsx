import React, { Component } from 'react';
import { Card, Row, Col, Button, Menu, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import Submenu from './components/submenu';
class Home extends Component {
  state = {
    current: 'Welcome to Edunomics',
  };
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  render() {
    return (
      <>
        <Row>
          <Col span={20} style={{ padding: '5px' }}>
            <h3 style={{ padding: '5px' }}>{this.state.current}</h3>
          </Col>
          <Col span={4} style={{ padding: '5px' }}>
            <Button shape="round" style={{ marginTop: '5px' }}>
              My Account
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={5} style={{ backgroundColor: 'grey' }}>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="vertical"
              style={{ backgroundColor: 'grey', height: '100%' }}
            >
              <Menu.Item key="Welcome to Edunomics">Home</Menu.Item>
              <Menu.Item key="Sessions">Sessions</Menu.Item>
              <Menu.Item key="Downloads">Downloads</Menu.Item>
              <Menu.Item key="Settings">Settings</Menu.Item>
              <Menu.Item key="About">About</Menu.Item>
            </Menu>
          </Col>
          <Col span={19}>
            <div style={{ backgroundColor: 'blue' }}>
              <Submenu current={this.state.current} />
            </div>
            <Row justify="center" style={{ marginTop: '4%' }}>
              <Card title="Topics Covered" style={{ marginRight: '4%' }}>
                <div style={{ width: '250px', height: '50px' }}></div>
              </Card>
              <Card title="Recent Activities">
                <div style={{ width: '250px', height: '50px' }}></div>
              </Card>
            </Row>
            <Row justify="center" style={{ marginTop: '4%' }}>
              <Card title="performance">
                <div style={{ height: '40px', width: '500px' }}></div>
              </Card>
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}

export default Home;
