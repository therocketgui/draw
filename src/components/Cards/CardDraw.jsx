import React, { Component } from 'react';
import { Row, Card, Icon, Avatar, Button } from 'antd';
const { Meta } = Card;

class CardDraw extends Component {
  render(){
    return (
      <Row type="flex" justify="space-around" align="middle">
        <Card
          style={{ width: 300 }}
          cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
          className="card draw-card"
          hoverable={false}
        >
          <Avatar
            size="large"
            className="avatar avatar-circle circle mb-30"
            src="http://localhost:8080/src/images/eos.png"
            style={{backgroundColor: '#F7F7F7'}}
          />
          <p className="mb-10 card-title">
            The Name
          </p>
          <p className="mb-10 card-sub">
            The longer title
          </p>
          <p className="mb-10 card-count">
            Start at block 210398
          </p>
          <Row className="btn-card-wrapper" type="flex" justify="space-around" align="middle">
            <Button
              className="btn-rounded"
              size="large"
            >
              Join Draw
            </Button>
          </Row>
        </Card>
      </Row>
    );
  }
}

export default CardDraw;
