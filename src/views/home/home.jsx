import React, { Component } from 'react';
import { Card, Row, Col, Button, Menu, Drawer, Avatar } from 'antd';
import { Link } from 'react-router-dom';
class Home extends Component {
  state = {
    current: 'home',
  };
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  render() {
    return (
      <Card>
        <Row>
          <Col span={20}>
            <h3>welcome to Edunomics</h3>
          </Col>
          <Col span={4}>
            <Button shape="round">My Account</Button>
          </Col>
        </Row>
        <Row>
          <Col span={5}>
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                height: '100%',
                padding: '50%',
              }}
            >
              <Drawer
                placement="left"
                visible={true}
                closable={false}
                style={{ position: 'absolute' }}
                getContainer={false}
              >
                <Menu
                  onClick={this.handleClick}
                  selectedKeys={[this.state.current]}
                  mode="vertical"
                >
                  <Menu.Item key="home">Home</Menu.Item>
                  <Menu.Item key="sessions">Sessions</Menu.Item>
                  <Menu.Item key="downloads">Downloads</Menu.Item>
                  <Menu.Item key="settings">Settings</Menu.Item>
                  <Menu.Item key="about">About</Menu.Item>
                </Menu>
              </Drawer>
            </div>
          </Col>
          <Col span={19}>
            <Row justify="center">
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
            <Row justify="center" style={{ marginTop: '4%' }}>
              <Card style={{ marginRight: '4%' }}>
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
          </Col>
        </Row>
      </Card>
    );
  }
}

export default Home;
