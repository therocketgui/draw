import React, { Component } from 'react';
import {Row, Col, Input, Button, Card, Icon, Avatar} from 'antd';

import { bindActionCreators } from 'redux';
import { fetchDraw, setRegister, setRegisterVisible } from './../../actions';
import { connect } from 'react-redux';

import MenuMain from './../../components/Menus/MenuMain';
import Register from './../../containers/Common/Register';

class Draw extends Component {
  componentDidMount() {
    if (!this.props.draw) {
      this.props.fetchDraw(this.props.match.params.id);
    }
  }
  renderRegister = () => {
    this.props.setRegisterVisible(true);
    this.props.setRegister(this.props.draw);
  }
  render(){
    if (!this.props.draw){
      return <p>Loading...</p>;
    }
    return (
      <div>
        <div className="Header">
          <div className="MenuMain-Container">
            <MenuMain />
            <Register data={this.props.register} />
          </div>
        </div>
        <div
          className="Draw-Header"
          style={{backgroundImage: `url(/src/images/${this.props.draw.background}`}}
        >
          <Row type="flex" justify="space-between" align="bottom">
            <Col span={6} />
            <Col span={18}>
              <div className="title">
                <h1>{this.props.draw.coin} - {this.props.draw.title}</h1>
              </div>
            </Col>
          </Row>
        </div>

        <div className="Draw-Main">
          <div className="Draw-Main-Sub">
            <Row  type="flex" justify="space-between" align="middle">
              <Col span={6}></Col>
              <Col span={6}><div className="center-text"><p>Pot Size: <span>17,837</span> EOS (1,230,000$)</p></div></Col>
              <Col span={6}><div className="center-text"><p>Participants: <span>2,345</span></p></div></Col>
              <Col span={6}><div className="center-text"><p>Ends in approx. <span>5 days, 23 hours</span></p></div></Col>
            </Row>
          </div>
          <div className="Draw-Blocs">
            <Row>
              <Col span={6}>
                <div className="Draw-Bloc Logo-Bloc">
                  <div className="logo">
                    <Avatar
                      size="large"
                      className="avatar rounded mb-15"
                      src={`/src/images/${this.props.draw.logo}`}
                      style={{backgroundColor: '#F7F7F7'}}
                    />
                  </div>
                  <div className="Draw-Card infos">
                    <div>
                      <h3>Infos</h3>
                      <p>Starts on block {this.props.draw.start}</p>
                      <p>Ends on block {this.props.draw.end}</p>
                      <p>Duration Estimation: 12 days</p>
                    </div>
                    <div className="cta">
                      <Button
                        className="btn-rounded"
                        size="large"
                        onClick={this.renderRegister}
                      >
                        Join Draw
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={18}>
                <div className="Draw-Bloc Draw-Card description">
                  <div>
                    <p>
                      {this.props.draw.description}
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  const idFromUrl = ownProps.match.params.id;
  const draw = state.draws.find(p => p.id == idFromUrl);
  return {
    draw: draw,
    register: state.register,
    registerVisible: state.registerVisible
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {
      fetchDraw: fetchDraw,
      setRegister: setRegister,
      setRegisterVisible: setRegisterVisible
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Draw);
