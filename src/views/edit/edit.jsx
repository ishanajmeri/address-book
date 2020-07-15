import React from 'react';
import Joi from 'joi-browser';
import { Card, Row } from 'antd';
import { getUser, saveUser } from '../../services/userServices';
import Form from './components/form';

class Edit extends Form {
  state = {
    data: {
      name: '',
      number: '',
    },
    errors: {},
  };
  schema = {
    _id: Joi.string(),
    name: Joi.string().required().label('Name').min(3),
    number: Joi.number().required().label('Number'),
  };
  async componentDidMount() {
    try {
      const userId = this.props.match.params.id;
      if (userId === 'new') return;
      const { data } = await getUser(userId);
      this.setState({ data: this.mapToViewModal(data) });
    } catch (ex) {
      console.log(ex);
    }
  }
  mapToViewModal(data) {
    return {
      _id: data._id,
      name: data.name,
      number: data.number,
    };
  }
  doSubmit = async () => {
    await saveUser(this.state.data);

    this.props.history.push('/');
  };
  render() {
    return (
      <Card>
        <Row justify="center">
          <form onSubmit={this.handleSubmit}>
            {this.renderInput('name', 'Name')}
            {this.renderInput('number', 'Number')}
            {this.renderButton('Save')}
          </form>
        </Row>
      </Card>
    );
  }
}

export default Edit;
