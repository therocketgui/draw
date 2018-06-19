import React from 'react';
import { Card, Row } from 'antd';


function CardHow({
  background,
  className,
  description,
  title,
}) {
  return (
    <Row type="flex" justify="space-around" align="middle">
      <div
        className={`how-card-bg ${className}`}
        style={{ backgroundImage: `url(/src/images/${background})` }}
      >
        <Card
          className={`card how-card ${className}`}
        >
          <p className="card-title">
            {title}
          </p>
          <p className="card-sub">
            {description}
          </p>
        </Card>
      </div>
    </Row>
  );
}

export default CardHow;
