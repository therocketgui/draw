import React, { Component } from 'react';
import { Row, Card } from 'antd';

class CardHow extends Component {
  render(){
    return (
      <Row type="flex" justify="space-around" align="middle">
        <div
          className={"how-card-bg " + this.props.className}
          style={{backgroundImage: `url(/src/images/${this.props.background})`}}
        >
          <Card
            className={"card how-card " + this.props.className}
          >
            <p className="card-title">
              {this.props.title}
            </p>
            <p className="card-sub">
              {this.props.description}
            </p>
          </Card>
        </div>
      </Row>
    );
  }
}

export default CardHow;
