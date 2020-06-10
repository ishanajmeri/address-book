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

const sessionsub = (
  <>
    <Card style={{ backgroundColor: 'blue', height: '300px' }}></Card>
  </>
);

const downloadsub = (
  <>
    <Card style={{ backgroundColor: 'blue', height: '300px' }}>
      <h3 style={{ color: 'white', fontWeight: 'bold' }}>
        Download previous year question papers
      </h3>
    </Card>
  </>
);

const settingsub = (
  <>
    <Card style={{ backgroundColor: 'blue', height: '300px' }}></Card>
  </>
);
const aboutsub = (
  <>
    <Card style={{ backgroundColor: 'blue', height: '300px' }}></Card>
  </>
);

const Submenu = (props) => {
  if (props.current === 'Welcome to Edunomics') return homesub;
  if (props.current === 'Sessions') return sessionsub;
  if (props.current === 'Downloads') return downloadsub;
  if (props.current === 'Settings') return settingsub;
  if (props.current === 'About') return aboutsub;
};

export default Submenu;
