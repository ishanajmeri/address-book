import React, { Component } from 'react';
import { Card, Row, Col, Button, Menu, Avatar } from 'antd';
import { Link } from 'react-router-dom';

const homesub = (
  <>
    <Row justify="center" style={{ paddingTop: '5%' }}>
      <Card style={{ marginRight: '4%' }}>
        <Card.Meta
          avatar={
            <Link to="">
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </Link>
          }
          title={
            <>
              <p>All interactive</p>
              <p>Sessions</p>
            </>
          }
        />
      </Card>
      <Card>
        <Card.Meta
          avatar={
            <Link to="">
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </Link>
          }
          title={
            <>
              <p>Practice</p>
              <p> Questions</p>
            </>
          }
        />
      </Card>
    </Row>
    <Row justify="center" style={{ marginTop: '4%', paddingBottom: '5%' }}>
      <Card style={{ marginRight: '5%' }}>
        <Card.Meta
          avatar={
            <Link to="">
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </Link>
          }
          title={<p>Downloads</p>}
        />
      </Card>
      <Card>
        <Card.Meta
          avatar={
            <Link to="">
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </Link>
          }
          title={
            <>
              <p>Ask</p>
              <p> Questions</p>
            </>
          }
        />
      </Card>
    </Row>
  </>
);

const Submenu = (props) => {
  if (props.current === 'Welcome to Edunomics') return homesub;
};

export default Submenu;
