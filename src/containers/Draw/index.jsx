import React, { Component } from 'react';
import { Avatar, Button, Col, Row } from 'antd';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { fetchDraw, setRegister, setRegisterVisible } from './../../actions';

import MenuMain from './../../components/Menus/MenuMain';
import Register from './../../containers/Common/Register';
import Footer from './../../components/Footer';


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
      end,
      logo,
      start,
      title,
    } = draw;

    return (
      <div>
        <div className="Header">
          <div className="MenuMain-Container">
            <MenuMain />
            <Register data={register} />
          </div>
        </div>
        <div
          className="Draw-Header"
          style={{ backgroundImage: `url(/src/images/${background}` }}
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
                    Pot Size: <span>17,837</span> EOS (1,230,000$)
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
                    Participants: <span>2,345</span>
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
                    Ends in approx. <span>5 days, 23 hours</span>
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
                      <p className="reading--regular">Starts on block {start}</p>
                      <p className="reading--regular">Ends on block {end}</p>
                      <p className="reading--regular">Duration Estimation: 12 days</p>
                    </div>
                    <div className="cta no-display">
                      <Button
                        className="btn-rounded"
                        size="large"
                        onClick={this.renderRegister}
                      >
                        Bet {bet} {symbol}
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
