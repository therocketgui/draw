import React, { Component } from 'react';
import {Row, Col, Input, Button, Card, Icon, Avatar} from 'antd';
import MenuMain from './../../components/Menus/MenuMain';
import CardDraw from './../../components/Cards/CardDraw';
import CardTeam from './../../components/Cards/CardTeam';
import CardHow from './../../components/Cards/CardHow';
import CardGain from './../../components/Cards/CardGain';
import FormMain from './../../components/Forms/FormMain';
import Register from './../../containers/Common/Register';

import Rocket from 'react-svg-loader!./../../images/rocket.svg';

// import { draws } from './../../data/data.js';

import { bindActionCreators } from 'redux';
import { setDraws, setRegister, setRegisterVisible } from './../../actions';
import { connect } from 'react-redux';

class Home extends Component {
  componentWillMount() {
    this.props.setDraws();
  }
  renderRegister = (draw) => {
    this.props.setRegisterVisible(true);
    this.props.setRegister(draw);
  }
  render() {
    return (
      <div>
        <div className="Header">
          <Row>
            <div className="MenuMain-Container">
              <MenuMain />
              <Register data={this.props.register} />
            </div>
          </Row>
          <Row type="flex" justify="space-around" align="middle">
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 12 }}>
              <h1>A Truly Decentralized “Winner Takes All” Open Source Lottery - Powered by Ethereum</h1>
              <div className="header-cta-wrapper">
                <FormMain />
              </div>
            </Col>
            <Col span={12}>
              <div className="no-display">
                <Rocket />
              </div>
            </Col>
          </Row>
        </div>

        <div className="Cards-bg">
          <div className="Container Cards">
            <Row gutter={8}>
              {this.props.draws.map((draw) =>
                  <CardDraw
                    key={draw.id}
                    data={draw}
                    renderRegister={this.renderRegister}
                  />
                )
              }
            </Row>
          </div>
        </div>

        <div className="Container-bg">
          <div className="Container How">
            <Row type="flex" justify="space-around" align="middle">
              <h2>How it works</h2>
            </Row>

            <Row type="flex" justify="space-around" align="middle">
              <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }} xl={{ span: 8 }}>
                <CardHow
                  className="left"
                  title="1. The contribution starts at specific bloc number"
                  description="Contribution to the lottery will starts when the blockchain hits a specific block number. At this point, the smart contract will start accepting the contributions."
                  background="how-card-bg-1.png"
                />
              </Col>
              <Col className="how-line-wrapper" span={4}>
                <div className="how-bullet no-display" />
                <div className="how-line no-display" />
              </Col>
              <Col span={8} />
            </Row>

            <Row type="flex" justify="space-around" align="middle">
              <Col span={8} />
              <Col className="how-line-wrapper" span={4}>
                <div className="how-bullet no-display" />
                <div className="how-line no-display" />
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }} xl={{ span: 8 }}>
                <CardHow
                  className="right"
                  title="2. Your Ethereum Address is your ticket"
                  description="Send the right amount to the smart contract, your ethereum address becomes your ticket for the lottery!"
                  background="how-card-bg-2.png"
                />
              </Col>
            </Row>

            <Row type="flex" justify="space-around" align="middle">
              <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }} xl={{ span: 8 }}>
                <CardHow
                  className="left"
                  title="3. The winner is determined by drawing lots"
                  description="At a specific bloc in the futur, an open-source and non-deterministic algorithm will determine the winning address."
                  background="how-card-bg-3.png"
                />
              </Col>
              <Col className="how-line-wrapper" span={4}>
                <div className="how-bullet no-display" />
                <div className="how-line no-display" />
              </Col>
              <Col span={8} />
            </Row>

            <Row type="flex" justify="space-around" align="middle">
              <Col span={8} />
              <Col className="how-line-wrapper no-t" span={4}>
                <div className="how-bullet no-display" />
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }} xl={{ span: 8 }}>
                <CardHow
                  className="right"
                  title="4. CASH OUT!"
                  description="The Smart Contract will send the pot to the winning address."
                  background="how-card-bg-4.png"
                />
              </Col>
            </Row>

          </div>
        </div>

        <div className="Container-bg-grey">
          <div className="Container Gain">
            <Row type="flex" justify="space-around" align="middle">
              <h2>Lottery Gains</h2>
            </Row>
            <Row>
              <CardGain
                title="99%"
                description="For the winner!"
                className="gain-card-top"
              />
            </Row>
            <Row type="flex" justify="space-around" align="middle">
              <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 12 }}>
                <div className="gain-bg no-display" />
              </Col>
            </Row>
            <Row>
              <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 12 }}>
                <CardGain
                  title="0.5%"
                  description="To Charity"
                  className="gain-card-bot"
                />
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }} xl={{ span: 12 }}>
                <CardGain
                  title="0.5%"
                  description="To our Team"
                  className="gain-card-bot"
                />
              </Col>
            </Row>
          </div>
        </div>

        <div className="Container-bg">
          <div className="Container Team">
            <Row type="flex" justify="space-around" align="middle">
              <h2>Meet the Team</h2>
            </Row>
            <Row type="flex" justify="space-around" align="middle">
              <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }}>
                <CardTeam
                  image={'guillaume.png'}
                  name={'GD'}
                  title={'Crypto Nerd'}
                  description={'Growth Engineer, Product Designer and Front-end Developper. Hacker & Painter.'}
                />
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }}>
                <CardTeam
                  image={'manu.png'}
                  name={'MV'}
                  title={'Crypto Nerd'}
                  description={'Systems Engineer, Back-end Engineer & Ethereum Developper. Polytechnique & Telecom Paris.'}
                />
              </Col>
            </Row>
          </div>
        </div>

        <div className="Container-bg-grey">
          <div className="Container">
            <Row>
              Footer
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    {setDraws: setDraws,
     setRegister: setRegister,
     setRegisterVisible: setRegisterVisible},
    dispatch
  );
}

function mapStateToProps(state){
  return {
    draws: state.draws,
    register: state.register,
    registerVisible: state.registerVisible
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
