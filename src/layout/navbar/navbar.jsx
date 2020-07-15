import React, { Component } from 'react';
import { Row, Col, Layout } from 'antd';

class Navbar extends Component {
  state = { current: true, path: this.props.path };
  handleChange = (e) => {
    console.log(e, 'handleChange');
    this.setState({ current: false, path: e });
  };
  render() {
    return (
      <Layout.Header style={{ backgroundColor: 'white' }}>
        <Col xs={25} sm={24} md={24} lg={24}>
          <Row justify="center">
            <strong>Address Book Manager</strong>
          </Row>
        </Col>
      </Layout.Header>
    );
  }
}

export default Navbar;
