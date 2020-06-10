import React, { Component } from 'react';
import { Card, Row, Col, Button, Menu, Dropdown } from 'antd';
import Submenu from './components/submenu';

function handleMenuClick(e) {
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.SubMenu title="11th">
      <Menu.SubMenu title="physics">
        <Menu.Item key="1"> Physical World</Menu.Item>
        <Menu.Item key="2"> Units and Measurement</Menu.Item>
        <Menu.Item key="3"> Motion in a Straight Line</Menu.Item>
        <Menu.Item key="4"> Motion in a Plane</Menu.Item>
        <Menu.Item key="5"> Law of Motion</Menu.Item>
        <Menu.Item key="6"> Work, Energy, and Power</Menu.Item>
        <Menu.Item key="7"> Systems of Power and Rotational Motion</Menu.Item>
        <Menu.Item key="8"> Gravitation</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu title="maths">
        <Menu.Item key="1">sets</Menu.Item>
        <Menu.Item key="2">Relation and function</Menu.Item>
        <Menu.Item key="3">Trignometric and function</Menu.Item>
        <Menu.Item key="4">Principal fo maths</Menu.Item>
        <Menu.Item key="5">Complex no. and QE</Menu.Item>
        <Menu.Item key="6">Liner inequalities</Menu.Item>
      </Menu.SubMenu>
    </Menu.SubMenu>
    <Menu.SubMenu title="12th">
      <Menu.SubMenu title="physics">
        <Menu.Item key="1"> Physical World</Menu.Item>
        <Menu.Item key="2"> Units and Measurement</Menu.Item>
        <Menu.Item key="3"> Motion in a Straight Line</Menu.Item>
        <Menu.Item key="4"> Motion in a Plane</Menu.Item>
        <Menu.Item key="5"> Law of Motion</Menu.Item>
        <Menu.Item key="6"> Work, Energy, and Power</Menu.Item>
        <Menu.Item key="7"> Systems of Power and Rotational Motion</Menu.Item>
        <Menu.Item key="8"> Gravitation</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu title="maths">
        <Menu.Item key="1">sets</Menu.Item>
        <Menu.Item key="2">Relation and function</Menu.Item>
        <Menu.Item key="3">Trignometric and function</Menu.Item>
        <Menu.Item key="4">Principal fo maths</Menu.Item>
        <Menu.Item key="5">Complex no. and QE</Menu.Item>
        <Menu.Item key="6">Liner inequalities</Menu.Item>
      </Menu.SubMenu>
    </Menu.SubMenu>
  </Menu>
);
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
            <Row>
              <h3 style={{ padding: '5px' }}>{this.state.current}</h3>
              {this.state.current === 'Sessions' && (
                <Dropdown overlay={menu}>
                  <Button
                    shape="round"
                    style={{ marginLeft: '25%', marginTop: '5px' }}
                  >
                    Select class
                  </Button>
                </Dropdown>
              )}
            </Row>
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
