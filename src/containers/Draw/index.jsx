import React, { Component } from 'react';
import { Avatar, Button, Col, Row } from 'antd';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';

import { bindActionCreators } from 'redux';
import { fetchDraw, setRegister, setRegisterVisible } from './../../actions';

import MenuSecondary from './../../components/Menus/MenuSecondary';
import Register from './../../containers/Common/Register';
import Footer from './../../components/Footer';
import dataLayer from './../../analytics/DataLayer';

class Draw extends Component {
  componentDidMount() {
    const { draw, match } = this.props;
    if (!draw) {
      // match.params.id is a string although our ids are numbers
      this.props.fetchDraw(parseInt(match.params.id, 10));
    }
  }

  renderRegister = () => {
    this.props.setRegisterVisible(true);
    this.props.setRegister(this.props.draw);
    dataLayer('Register_Popup');
  };

  render() {
    if (!this.props.draw) {
      return <p>Loading...</p>;
    }

    const {
      register,
      draw,
    } = this.props;

    const {
      background,
      coin,
      description,
      bet,
      symbol,
      logo,
      title,
    } = draw;

    return (
      <div>
        <div className="Header">
          <div className="MenuMain-Container">
            <MenuSecondary className="white" />
            <Register data={register} />
          </div>
        </div>
        <div
          className="Draw-Header"
          style={{ backgroundImage: `url(/src/images/${background})` }}
        >
          <div className="logo-mobile display">
            <Row type="flex" justify="space-between" align="center">
              <Avatar
                size="large"
                className="avatar avatar-circle rounded mb-15"
                src={`/src/images/${logo}`}
                style={{ backgroundColor: "#F7F7F7" }}
              />
            </Row>
          </div>
          <Row type="flex" justify="space-between" align="bottom">
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 6 }}
              xl={{ span: 6 }}
            />
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 18 }}
              xl={{ span: 18 }}
            >
              <div className="title">
                <h1>{coin} - {title}</h1>
                <div className="cta-mobile display">
                  <Button
                    className="btn-rounded"
                    size="large"
                    onClick={this.renderRegister}
                  >
                    Join Draw
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="Draw-Main">
          <div className="Draw-Main-Sub">
            <Row type="flex" justify="space-between" align="middle">
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 6 }}
                xl={{ span: 6 }}
              />
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 6 }}
                xl={{ span: 6 }}
              >
                <div className="center-text">
                  <p className="reading--regular">
                    Pot Size: TBC
                  </p>
                </div>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 6 }}
                xl={{ span: 6 }}
              >
                <div className="center-text">
                  <p className="reading--regular">
                    Participants: TBC
                  </p>
                </div>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 6 }}
                xl={{ span: 6 }}
              >
                <div className="center-text">
                  <p className="reading--regular">
                    Ends in approx. TBC
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="Draw-Blocs">
            <Row>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 6 }}
                xl={{ span: 6 }}
              >
                <div className="Draw-Bloc Logo-Bloc">
                  <div className="logo no-display">
                    <Avatar
                      size="large"
                      className="avatar rounded mb-15"
                      src={`/src/images/${logo}`}
                      style={{ backgroundColor: "#F7F7F7" }}
                    />
                  </div>
                  <div className="Draw-Card infos card">
                    <div>
                      <h3>Infos</h3>
                      <p className="reading--regular">Start date TBC</p>
                      <p className="reading--regular" />
                      <p className="reading--regular" />
                    </div>
                    <div className="cta no-display">
                      <Button
                        className="btn-rounded"
                        size="large"
                        onClick={this.renderRegister}
                      >
                        Bet <NumberFormat thousandSeparator value={bet} displayType="text" /> {symbol}
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 24 }}
                lg={{ span: 18 }}
                xl={{ span: 18 }}
              >
                <div className="Draw-Bloc Draw-Card description">
                  <div>
                    <p className="reading--large">
                      {description}
                      <br /><br />
                      Winner takes all the pot at the end of the lottery.
                      The lottery will starts when the Ethereum blockchain
                      is at a specific block number defined in the smart contract.
                      At this point only, the smart contract will accept contributions.
                      <br /><br />
                      Send the exact amount to the smart contract.
                      Your ethereum address becomes your ticket for the lottery!
                      <br /><br />
                      At a specific block defined in the smart contract,
                      our open-source and non-deterministic algorithm will determine
                      the winning Ethereum address.
                      <br /><br />
                      The Smart Contract will close and send 99% of the gains
                      to the winning address.
                      The remaining gains will be split between a chosen Charity (0.8%)
                      and our Team for product development and marketing (0.2%).
                      <br /><br />
                      Winner takes all! Join Now!
                      <br /><br />
                      Note: This is the first trustless lottery.
                      There is no way to get scammed or cheat,
                      the smart contract will be open for review
                      and everything will be open source.
                      Blockchain is the future and we want to be apart of it :).
                      Support us and share us with your friends!
                      <br /><br />
                      Good luck.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="Container-bg-grey">
          <div className="Container">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  // match.params.id is a string although our ids are numbers
  const idFromUrl = parseInt(ownProps.match.params.id, 10);
  const draw = state.draws.find(p => p.id === idFromUrl);
  return {
    draw,
    register: state.register,
    registerVisible: state.registerVisible
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchDraw,
    setRegister,
    setRegisterVisible,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Draw);
