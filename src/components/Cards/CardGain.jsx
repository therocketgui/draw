import React from 'react';
import { Card, Row } from 'antd';


function CardHow({ className, description, title }) {
  return (
    <Row type="flex" justify="space-around" align="middle">
      <Card
        className={`card gain-card ${className}`}
      >
        <p className="card-title">
          {title}
        </p>
        <p className="card-sub">
          {description}
        </p>
      </Card>
    </Row>
  );
}

export default CardHow;
