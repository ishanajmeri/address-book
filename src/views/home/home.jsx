import React, { Component } from 'react';
import { Card, Row, Col, Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

class Home extends Component {
  state = {
    visible: false,
  };
  handleClick = () => {
    console.log('sign up');
  };

  handleLogin = () => {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  };
  render() {
    const onFinish = (values) => {
      console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
    return (
      <>
        <Card
          style={{
            backgroundImage: 'url(https://i.picsum.photos/id/1/5616/3744.jpg)',
            backgroundSize: 'cover',
          }}
        >
          <Row>
            <Col span={20}>
              <h4 style={{ color: 'white' }}>Welcome to Edunomics</h4>
            </Col>
            <Col span={4}>
              <Button type="link" ghost="true" onClick={this.handleLogin}>
                Log In
              </Button>
              <Button shape="round" ghost="true" href="/signup">
                Sign Up
              </Button>
            </Col>
          </Row>
          <Row justify="center">
            <Col>
              <Row justify="center" style={{ padding: '20% 15% 0 10%' }}>
                <h1
                  style={{
                    fontWeight: 'bold',
                    fontSize: '230%',
                    textAlign: 'center',
                    color: 'white',
                  }}
                >
                  WHERE DO YOU WANT TO GO TODAY?
                </h1>
              </Row>
              <Row justify="center" style={{ padding: '0 15% 20% 10%' }}>
                <h2 style={{ textAlign: 'center', color: 'white' }}>
                  share your ulimate travel bucket first with us.
                </h2>
              </Row>
            </Col>
            {this.state.visible && (
              <Col style={{ paddingTop: '2%' }}>
                <Form
                  layout="vertical"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    label="Email Id"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your username!',
                      },
                    ]}
                  >
                    <Input type="email"></Input>
                  </Form.Item>
                  <Form.Item
                    label="password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your password!',
                      },
                    ]}
                  >
                    <Input type="password"></Input>
                  </Form.Item>
                  <Form.Item>
                    <Button ghost="true" shape="round">
                      log in
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            )}
          </Row>
        </Card>
        <Card style={{ padding: '5% 10% 0 15%' }}>
          <h2>Whatever your style,travel your way</h2>
          <p>
            Elon Musk's rocket company last week launched 60 more
            internet-beaming satellites into space on a reused Falcon 9 rocket,
            bringing its total count to around 480 and moving it closer to the
            800 it needs to provide moderate coverage over the US.
          </p>
          <p>
            The company plans to launch a public beta of the satellite internet
            service by the end of the northern hemisphere's summer and has won
            approval to deploy one million end-user terminals in the US.{' '}
          </p>
          <p>
            SpaceX recently applied to the Federal Communications Commission to
            launch 30,000 second-generation satellites over and above the 12,000
            that had already been approved. Assuming the second-generation
            satellites carry the same number of Linux computers, it would mean
            SpaceX plans to send at least two million Linux computers into space
            in the next few years.{' '}
          </p>
          <p>
            It also means that it's now sent 32,000 Linux computers to space for
            the existing constellation.{' '}
          </p>
          <p>
            "The constellation has more than 30,000 Linux nodes (and more than
            6,000 microcontrollers) in space right now," wrote Matt Monson,
            SpaceX's director of Starlink software.{' '}
          </p>
          <p>
            "And because we share a lot of our Linux platform infrastructure
            with Falcon and Dragon, they get the benefit of our more than 180
            vehicle-years of on-orbit test time."
          </p>
          <p>
            The AMA was also hosted by Jeff Dexter, who runs flight software and
            cybersecurity at SpaceX; Josh Sulkin, the software design lead for
            Crew Dragon, the spacecraft that took NASA astronauts Bob Behnken
            and Doug Hurley to the International Space Station last week; Wendy
            Shimata, who manages the Dragon software team; John Dietrick, the
            software development lead for Demo-2; and Sofian Hnaide, who works
            on the Crew Displays software for Demo-2.{' '}
          </p>
          <img
            src="https://i.picsum.photos/id/4/5616/3744.jpg"
            alt="imag"
            style={{ width: '100%', height: '60%', padding: '2% 0 2% 0' }}
          ></img>
          <p>
            "Get your CS degree (or something) similar," said Dexter. "Spend
            time to really make sure you know how things work – engineers who do
            well at SpaceX are meticulous in their understanding of how their
            code works, how the network works, how Linux works, how the hardware
            works, etc. Get real-world experience building things and solving
            hard problems, either through hobby projects or in internships (at
            SpaceX)."
          </p>
          <p>
            As the Starlink satellite broadband service moves from a test to
            operational phase in coming months, security is going to become a
            critical issue for SpaceX. Moran offered some insight into the
            issues that SpaceX engineers are looking out for, from the
            satellites to gateways and the 'UFO-on-a-stick' end-user terminals
            located at households.{' '}
          </p>
          <p>
            "We designed the system to use end-to-end encryption for our users'
            data, to make breaking into a satellite or gateway less useful to an
            attacker who wants to intercept communications," wrote Moran.{' '}
          </p>
          <p>
            "Every piece of hardware in our system (satellites, gateways, user
            terminals) is designed to only run software signed by us, so that
            even if an attacker breaks in, they won't be able to gain a
            permanent foothold.{' '}
          </p>
          <p>
            "And then we harden the insides of the system (including services in
            our data centers) to make it harder for an exploited vulnerability
            in one area to be leveraged somewhere else. We're continuing to work
            hard to ensure our overall system is properly hardened, and still
            have a lot of work ahead of us (we're hiring), but it's something we
            take very seriously."
          </p>
        </Card>
      </>
    );
  }
}

export default Home;
