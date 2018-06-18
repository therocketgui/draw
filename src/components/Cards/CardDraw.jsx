import React, { Component } from 'react';
import { Row, Col, Card, Icon, Avatar, Button } from 'antd';
import { Link } from 'react-router-dom';
// import Register from './../../components/Modals/Register';

const { Meta } = Card;

class CardDraw extends Component {
  renderRegister = () => {
    this.props.renderRegister(this.props.data);
  }
  render() {
    return (
      <Col className="pl-10 pr-10" xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 6 }} xl={{ span: 6 }}>

          <Row type="flex" justify="space-around" align="middle">
            <Card
              style={{ width: 300 }}
              cover={<img alt="example" src={`http://localhost:8080/src/images/${this.props.data.background}`} />}
              className="card draw-card mb-30"
              hoverable={false}
            >
              <Link to={`/draw/${this.props.data.id}`}>
                <Avatar
                  size="large"
                  className="avatar avatar-circle circle mb-30"
                  src={`http://localhost:8080/src/images/${this.props.data.logo}`}
                  style={{backgroundColor: '#F7F7F7'}}
                />
                <p className="mb-10 card-title">
                  {this.props.data.coin}
                </p>
                <p className="mb-10 card-sub">
                  {this.props.data.title}
                </p>
                <p className="mb-10 card-count">
                  Start at block {this.props.data.start}
                </p>
              </Link>
              <Row className="btn-card-wrapper" type="flex" justify="space-around" align="middle">
                <Button
                  className="btn-rounded"
                  size="large"
                  onClick={this.renderRegister}
                >
                  Join Draw
                </Button>
              </Row>
            </Card>
          </Row>
      </Col>
    );
  }
}

export default CardDraw;
