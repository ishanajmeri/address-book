import React, { Component } from 'react';
import { Card, Row, Table, Space, Col } from 'antd';
import { Link } from 'react-router-dom';
import { getUsers } from '../../services/userServices';

class Home extends Component {
  state = {
    pagination: {
      current: 1,
      pageSize: 5,
    },
    filteredInfo: null,
    sortedInfo: null,
    users: [],
  };
  async componentDidMount() {
    const { data } = await getUsers();
    let users = [];
    let user = [];
    for (let item of data) {
      user.key = item._id;
      user.name = item.name;
      user.number = item.number;
      users.push(user);
      user = [];
    }
    this.setState({ users });
  }

  handleChange = (pagination, filters, sorter) => {
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
      pagination,
    });
  };

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <Link to="/edit">{text}</Link>,
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Number',
        dataIndex: 'number',
        key: 'number',
        sorter: (a, b) => a.number - b.number,
        sortOrder: sortedInfo.columnKey === 'number' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <Link to={`/edit/${record.key}`}>Edit {record.name}</Link>
            <Link to="/delete">Delete</Link>
          </Space>
        ),
      },
    ];
    return (
      <Card>
        <Row justify="center">
          <Col span={10}>
            <Table
              columns={columns}
              dataSource={this.state.users}
              pagination={this.state.pagination}
              onChange={this.handleChange}
            />
          </Col>
        </Row>
      </Card>
    );
  }
}

export default Home;
