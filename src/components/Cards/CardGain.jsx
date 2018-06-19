import React, { Component } from 'react';
import { Row, Card } from 'antd';

class CardHow extends Component {
  render(){
    return (
      <Row type="flex" justify="space-around" align="middle">
          <Card
            className={`card gain-card ${this.props.className}`}
          >
            <img src={`src/images/${this.props.icon}`} />
            <p className="card-title">
              {this.props.title}
            </p>
            <p className="card-sub">
              {this.props.description}
            </p>
          </Card>
      </Row>
    );
  }
}

export default CardHow;
