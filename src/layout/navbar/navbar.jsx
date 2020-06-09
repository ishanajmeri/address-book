import React, { Component } from 'react';
import { NavLink, Link, Redirect } from 'react-router-dom';
import { Menu, Row, Col, Dropdown, Divider, Input, Layout, Select } from 'antd';
import {
  DownOutlined,
  AntCloudOutlined,
  FlagOutlined,
} from '@ant-design/icons';

class Navbar extends Component {
  state = { current: true, path: this.props.path };
  handleChange = (e) => {
    console.log(e, 'handleChange');
    this.setState({ current: false, path: e });
  };
  render() {
    console.log(this.state);
    return (
      <Layout.Header style={{ backgroundColor: 'white' }}>
        <Row gutter={0}>
          <Col span={1}>
            <NavLink to="/">
              <img
                src="https://img.icons8.com/color/20/000000/linkedin.png"
                alt="some"
              />
            </NavLink>
            <Divider type="vertical" />
          </Col>
          <Col span={4}>
            <Row justify="start">
              <Select
                defaultValue={this.props.name}
                onChange={this.handleChange}
                style={{ width: 120, marginTop: '10%' }}
              >
                <Select.Option value="/discover">discover</Select.Option>
                <Select.Option value="/profile">profile</Select.Option>
              </Select>
              {!this.state.current && <Redirect to={`${this.state.path}`} />}
            </Row>
          </Col>
          <Col span={16}>
            <Input.Search
              placeholder="input search text"
              onSearch={(value) => console.log(value)}
              style={{ width: '60%' }}
            />
          </Col>
          <Col span={3}>
            <Link to="/notifications">
              <AntCloudOutlined style={{ fontSize: '15px', padding: '10%' }} />
            </Link>
            <Link to="/message">
              <FlagOutlined style={{ fontSize: '15px', padding: '5%' }} />
            </Link>
            {/* admin menu */}
          </Col>
        </Row>
      </Layout.Header>
    );
  }
}

export default Navbar;
