import React, { Component } from 'react';
import { Form, Button, Input, notification } from 'antd';
const FormItem = Form.Item;

class FormMain extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.handleOk) {
      this.props.handleOk();
    }
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        e.target.reset();
        this.triggerNotification();
      }
    });
  }
  triggerNotification() {
    notification.open({
      message: 'Welcome on board :)',
      description: 'You\'ll be the first person notified when we launch and will enjoy special perks & lotteries. We\'re glad to have you as one of our first futur user!',
    });
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="">
          <FormItem>
            {getFieldDecorator('email', {
              rules: [{ required: true }],
            })(
              <Input
                placeholder="Email"
                className="Main-Input mb-10"
              />
            )}
          </FormItem>
          <FormItem>
            <Button
              className="Main-Cta"
              htmlType="submit"
            >
              Yes, I want to be notified!
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Form.create()(FormMain);
