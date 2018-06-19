import React from 'react';
import { Avatar, Card, Row } from 'antd';


function CardTeam({ description, name, title }) {
  return (
    <Row type="flex" justify="space-around" align="middle">
      <Card
        style={{ width: 300 }}
        className="card team-card mb-20"
        hoverable={false}
      >
        <Avatar
          size="large"
          className="avatar rounded mb-10"
          // src={`http://localhost:8080/src/images/${this.props.image}`}
          style={{ backgroundColor: "#F7F7F7" }}
        />
        <p className="mb-10 card-title">
          {name}
        </p>
        <p className="mb-10 card-sub">
          {title}
        </p>
        <p className="mb-30 card-desc team-card-desc">
          {description}
        </p>
      </Card>
    </Row>
  );
}

export default CardTeam;
