import React, { Component } from 'react';
import { Row, Card, Icon, Avatar } from 'antd';
const { Meta } = Card;

class CardTeam extends Component {
  render(){
    return (
      <Row type="flex" justify="space-around" align="middle">
        <Card
          style={{ width: 300 }}
          className="card team-card"
          hoverable={false}
        >
          <Avatar
            size="large"
            className="avatar rounded mb-30"
            src="http://localhost:8080/src/images/manu.png"
            style={{backgroundColor: '#F7F7F7'}}
          />
          <p className="mb-10 card-title">
            Jean Jean
          </p>
          <p className="mb-10 card-sub">
            Hacker & Painter
          </p>
          <p className="mb-30 card-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
        </Card>
      </Row>
    );
  }
}

export default CardTeam;
