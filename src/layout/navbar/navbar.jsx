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
        <Row justify="center">
          <Col>
            <h2>Address Book Manager</h2>
          </Col>
        </Row>
      </Layout.Header>
    );
  }
}

export default Navbar;
