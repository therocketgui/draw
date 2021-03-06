import React, { Component } from 'react';
import { Form, Button, Input, notification } from 'antd';
import { postEmail } from './../../actions';

const FormItem = Form.Item;

function triggerNotification () {
  notification.open({
    message: 'Welcome on board :)',
    description: 'Thanks a lot for supporting us in our journey to build this decentralized product. You\'ll be the first person notified when we launch and will enjoy special perks & lotteries. We\'re glad to have you as one of our first futur user!',
  });
}


class FormMain extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        postEmail({ email: values.email, date: new Date().toISOString(), draw: window.location.href});
        this.props.analytics('FormDraw_submit');
        if (this.props.handleOk) {
          this.props.handleOk();
        }
        e.target.reset();
        triggerNotification();
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="">
          <FormItem>
            {getFieldDecorator('email', {
              rules: [{ required: true }],
            })(<Input placeholder="Email" className="Main-Input mb-10" />)}
          </FormItem>
          <FormItem>
            <Button
              className="Main-Cta"
              htmlType="submit"
            >
              Join Our Pre-Launch List!
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Form.create()(FormMain);
