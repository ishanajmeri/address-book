import React from 'react';
import { Card, Row, Col } from 'antd';
import {
  FacebookFilled,
  TwitterCircleFilled,
  InstagramFilled,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Card style={{ backgroundColor: 'gray', color: 'white' }}>
      <Row justify="center">EDUNMOICS</Row>
      <Row justify="center">contact@edunomics.in</Row>
      <Row justify="center">
        <Col>
          <FacebookFilled />
        </Col>
        <Col offset={1}>
          <TwitterCircleFilled />
        </Col>
        <Col offset={1}>
          <InstagramFilled />
        </Col>
      </Row>
      <br />
      <Row justify="center">
        <Link style={{ color: 'white', fontSize: '16px' }}>JOIN US</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link style={{ color: 'white', fontSize: '16px' }}>COOKIE POLICY</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link style={{ color: 'white', fontSize: '16px' }}>TERMS OF USE</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link style={{ color: 'white', fontSize: '16px' }}>TECH</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link style={{ color: 'white', fontSize: '16px' }}>PRIVACY POLICY</Link>
      </Row>
    </Card>
  );
};

export default Footer;
