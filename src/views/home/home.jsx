import React, { Component } from 'react';
import { Card, Row, Table, Space, Col, Button, Input } from 'antd';
import { Link } from 'react-router-dom';
import { getUsers, deleteUser } from '../../services/userServices';

class Home extends Component {
  state = {
    pagination: {
      current: 1,
      pageSize: 5,
    },
    filteredInfo: null,
    sortedInfo: null,
    users: [],
    search: '',
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
  handleClick = () => {
    this.props.history.push('/edit/new');
  };

  handleDelete = async (user) => {
    const originalUsers = this.state.users;
    const users = originalUsers.filter((m) => m._id !== user._id);
    this.setState({ users });
    try {
      await deleteUser(user._id);
    } catch (ex) {
      console.log(ex);
      this.setState({ users: originalUsers });
    }
  };

  handleSearch = (search) => {
    this.setState({ search });
  };
  getdata = () => {
    const { search, users: allusers } = this.state;
    let filterd = allusers;
    if (search)
      filterd = allusers.filter((m) =>
        m.name.toLowerCase().startsWith(search.toLowerCase())
      );
    return { users: filterd };
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
        render: (text, record) => (
          <Link to={`/edit/${record.key}`}>{text}</Link>
        ),
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
            <Link to={`/edit/${record.key}`}>Edit </Link>
            <Button type="link" onClick={() => this.handleDelete(record)}>
              Delete
            </Button>
          </Space>
        ),
      },
    ];
    const { users } = this.getdata();
    return (
      <Card>
        <Row justify="center">
          <Col span={10}>
            <Button
              onClick={this.handleClick}
              type="primary"
              style={{ marginBottom: 16 }}
            >
              Add a user
            </Button>
            <Row>
              <Input.Search
                placeholder="input search"
                onChange={(e) => this.handleSearch(e.currentTarget.value)}
              />
            </Row>
            <br />
            <Table
              columns={columns}
              dataSource={users}
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
