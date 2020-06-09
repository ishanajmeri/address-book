import React, { Component } from 'react';
import { Card, Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';

class Home extends Component {
  state = {};
  handleClick = () => {
    console.log('sign up');
  };
  render() {
    return (
      <Card style={{ backgroundColor: 'blue', height: '80%' }}>
        <Row>
          <Col span={20}>Welcome to Edunomics</Col>
          <Col span={4}>
            <Link style={{ color: 'white', padding: '5%' }} to="">
              Log in
            </Link>
            <Button shape="round" onClick={this.handleClick}>
              Sign Up
            </Button>
          </Col>
        </Row>
        <Row justify="center">
          <Col>
            <Row justify="center" style={{ padding: '20% 15% 0 10%' }}>
              <h1
                style={{
                  fontWeight: 'bold',
                  fontSize: '230%',
                  textAlign: 'center',
                }}
              >
                WHERE DO YOU WANT TO GO TODAY?
              </h1>
            </Row>
            <Row justify="center" style={{ padding: '0 15% 20% 10%' }}>
              <h2 style={{ textAlign: 'center' }}>
                share your ulimate travel bucket first with us.
              </h2>
            </Row>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default Home;
