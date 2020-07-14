import React, { Component } from 'react';
import { Card, Row, Table, Space, Col } from 'antd';
import { Link } from 'react-router-dom';

class Home extends Component {
  state = {
    pagination: {
      current: 1,
      pageSize: 5,
    },
    filteredInfo: null,
    sortedInfo: null,
  };

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
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
        render: (text) => <Link>{text}</Link>,
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
            <Link to="/edit">Edit {record.name}</Link>
            <Link to="/delete">Delete</Link>
          </Space>
        ),
      },
    ];

    const data = [
      {
        key: '1',
        name: 'John Brown',
        number: 32,
      },
      {
        key: '2',
        name: 'Jim Green',
        number: 42,
      },
      {
        key: '3',
        name: 'Joe Black',
        number: 32,
      },
      {
        key: '3',
        name: 'Joe Black',
        number: 32,
      },
      {
        key: '3',
        name: 'Joe Black',
        number: 32,
      },
      {
        key: '3',
        name: 'Joe Black',
        number: 32,
      },
      {
        key: '3',
        name: 'Joe Black',
        number: 32,
      },
      {
        key: '3',
        name: 'Joe Black',
        number: 32,
      },
    ];

    return (
      <Card>
        <Row justify="center">
          <Col span={10}>
            <Table
              columns={columns}
              dataSource={data}
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
