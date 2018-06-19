import React, { Component } from 'react';
import { Avatar, Modal } from 'antd';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { setRegisterVisible } from './../../../actions';
import FormMain from './../../../components/Forms/FormMain';


class Register extends Component {
  state = {
    confirmLoading: false
  };

  handleCancel = () => {
    this.props.setRegisterVisible(false);
  };

  handleOk = () => {
    this.props.setRegisterVisible(false);
  };

  render() {
    const { confirmLoading } = this.state;

    if (!this.props.register) {
      return <p>Loading...</p>;
    }

    const { registerVisible, register: { coin, logo, title } } = this.props;

    return (
      <div>
        <Modal
          visible={registerVisible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          className="Register-Modal"
        >
          <div>
            <div className="Register-Wrapper Register-Avatar">
              <Avatar
                size="large"
                className="avatar avatar-circle circle mb-30 avatar-reg"
                src={`/src/images/${this.props.register.logo}`}
                style={{backgroundColor: '#F7F7F7'}}
              />
            </div>
            <div className="Register-Wrapper Register-Description">
              <h2>Get Notify When the {coin} - {title} lottery Starts</h2>
              <p>We're working day and night to launch it. Support us and share to your friends! :)</p>
            </div>
            <div className="Register-Wrapper Register-CTA">
              <FormMain handleOk={this.handleOk} />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setRegisterVisible },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    registerVisible: state.registerVisible,
    register: state.register
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Register);
