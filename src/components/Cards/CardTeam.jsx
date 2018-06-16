import React, { Component } from 'react';
import { Row, Card, Icon, Avatar } from 'antd';
const { Meta } = Card;

class CardTeam extends Component {
  render(){
    return (
      <Row type="flex" justify="space-around" align="middle">
        <Card
          style={{ width: 300 }}
          className="card team-card mb-20"
          hoverable={false}
        >
          <Avatar
            size="large"
            className="avatar rounded mb-30"
            src={`http://localhost:8080/src/images/${this.props.image}`}
            style={{backgroundColor: '#F7F7F7'}}
          />
          <p className="mb-10 card-title">
            {this.props.name}
          </p>
          <p className="mb-10 card-sub">
            {this.props.title}
          </p>
          <p className="mb-30 card-desc team-card-desc">
            {this.props.description}
          </p>
        </Card>
      </Row>
    );
  }
}

export default CardTeam;
