import React, { Component } from 'react';
import { Col, Row } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Rocket from 'react-svg-loader!./../../images/rocket.svg';
import Logo from 'react-svg-loader!./../../images/logo.svg';

import MenuMain from './../../components/Menus/MenuMain';
import CardDraw from './../../components/Cards/CardDraw';
import CardTeam from './../../components/Cards/CardTeam';
import CardHow from './../../components/Cards/CardHow';
import CardGain from './../../components/Cards/CardGain';
import FormMain from './../../components/Forms/FormMain';
import Footer from './../../components/Footer';
import SubCta from './../../components/Buttons/SubCta';
import Register from './../../containers/Common/Register';

import dataLayer from './../../analytics/DataLayer';

import { setDraws, setRegister, setRegisterVisible } from './../../actions';


class Home extends Component {
  componentWillMount() {
    this.props.setDraws();
  }

  analytics = (name) => {
    dataLayer(name);
  }

  renderRegister = (draw) => {
    this.props.setRegisterVisible(true);
    this.props.setRegister(draw);
    dataLayer('Register_Popup');
  };
  render() {
    const { register, draws } = this.props;

    return (
      <div>
        <div className="Header" id="register">
          <Row>
            <div className="MenuMain-Container">
              <MenuMain />
              <Register data={register} />
            </div>
          </Row>
          <Row type="flex" justify="space-around" align="middle">
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 12 }}
              xl={{ span: 12 }}
            >
              <div className="logo">
                <Logo />
              </div>
              <h1>
                A Truly Decentralized “Winner Takes All” Open Source Lottery - Powered by Ethereum
              </h1>
              <div className="header-cta-wrapper">
                <FormMain analytics={this.analytics} />
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
              {draws.map(draw => (
                <CardDraw
                  key={draw.id}
                  data={draw}
                  renderRegister={this.renderRegister}
                  analytics={this.analytics}
                />
              ))}
            </Row>
          </div>
        </div>

        <div className="Container-bg">
          <div className="Container How">
            <Row type="flex" justify="space-around" align="middle">
              <div id="howitworks">
                <h2>How it works</h2>
              </div>
            </Row>

            <Row type="flex" justify="space-around" align="middle">
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 8 }}
                xl={{ span: 8 }}
              >
                <CardHow
                  className="left"
                  title="1. Contribution starts on a pre-defined block number."
                  description="The lottery will starts when the Ethereum blockchain is at a specific block number defined in the smart contract. At this point only, the smart contract will accept contributions."
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
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 8 }}
                xl={{ span: 8 }}
              >
                <CardHow
                  className="right"
                  title="2. Your Ethereum Address is your ticket."
                  description="Send the exact amount to the smart contract. Your ethereum address becomes your ticket for the lottery!"
                  background="how-card-bg-2.png"
                />
              </Col>
            </Row>

            <Row type="flex" justify="space-around" align="middle">
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 8 }}
                xl={{ span: 8 }}
              >
                <CardHow
                  className="left"
                  title="3. The winner is determined by a non-deterministic algorithm."
                  description="At a specific block defined in the smart contract, our open-source and non-deterministic algorithm will determine the winning Ethereum address."
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
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 8 }}
                xl={{ span: 8 }}
              >
                <CardHow
                  className="right"
                  title="4. Cash out."
                  description="The Smart Contract will send all the pot to the winning address. Winner takes all!"
                  background="how-card-bg-4.png"
                />
              </Col>
            </Row>
            <SubCta />
          </div>
        </div>

        <div className="Container-bg-grey">
          <div className="Container Gain">
            <Row type="flex" justify="space-around" align="middle">
              <div id="gains">
                <h2>Gains</h2>
              </div>
            </Row>
            <Row>
              <CardGain
                title="99%"
                description="To the winner!"
                className="gain-card-top"
                icon="winner.svg"
              />
            </Row>
            <Row type="flex" justify="space-around" align="middle">
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 12 }}
                xl={{ span: 12 }}
              >
                <div className="gain-bg no-display" />
              </Col>
            </Row>
            <Row>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 12 }}
                xl={{ span: 12 }}
              >
                <CardGain
                  title="0.8%"
                  description="To A Charity :)"
                  className="gain-card-bot"
                  icon="charity.svg"
                />
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 12 }}
                xl={{ span: 12 }}
              >
                <CardGain
                  title="0.2%"
                  description="To our Team"
                  className="gain-card-bot"
                  icon="team.svg"
                />
              </Col>
            </Row>
            <SubCta />
          </div>
        </div>

        <div className="Container-bg">
          <div className="Container Team">
            <Row type="flex" justify="space-around" align="middle">
              <div id="meettheteam">
                <h2>Meet the Team</h2>
              </div>
            </Row>
            <Row type="flex" justify="space-around" align="middle">
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
                xl={{ span: 12 }}
              >
                <CardTeam
                  image="G"
                  name="Guillaume"
                  title="Crypto Nerd"
                  description="Growth Engineering & Strategy. Product Designer and Full-stack Dev. Hacker."
                />
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
                xl={{ span: 12 }}
              >
                <CardTeam
                  image="M"
                  name="Manu"
                  title="Crypto Nerd"
                  description="Systems Engineer. Back-end Engineer & Solicity Developper. Polytech & Telecom Paris."
                />
              </Col>
            </Row>
            <SubCta />
          </div>
        </div>

        <div className="Container-bg-primary">
          <div className="Container">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setDraws,
    setRegister,
    setRegisterVisible,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    draws: state.draws,
    register: state.register,
    registerVisible: state.registerVisible
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
