import React from 'react';
import { Avatar, Button, Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';

function CardDraw({ analytics, renderRegister, data }) {
  const {
    id,
    background,
    coin,
    logo,
    start,
    title,
  } = data;

  return (
    <Col className="pl-10 pr-10" xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 6 }} xl={{ span: 6 }}>
      <Row type="flex" justify="space-around" align="middle">
        <Card
          style={{ width: 300 }}
          cover={<img alt="example" src={`/src/images/${background}`} />}
          className="card draw-card mb-30"
          hoverable={false}
          onClick={() => analytics('CardDraw_click')}
        >
          <Link
            href={`/draw/${id}`}
            to={`/draw/${id}`}
          >
            <Avatar
              size="large"
              className="avatar avatar-circle circle mb-30"
              src={`/src/images/${logo}`}
              style={{ backgroundColor: "#F7F7F7" }}
            />
            <p className="mb-10 card-title">
              {coin}
            </p>
            <p className="mb-10 card-sub">
              {title}
            </p>
            <p className="mb-10 card-count">
              Start at block {start}
            </p>
          </Link>
          <Row className="btn-card-wrapper" type="flex" justify="space-around" align="middle">
            <Button
              className="btn-rounded"
              size="large"
              onClick={() => renderRegister(data)}
            >
              Join Draw
            </Button>
          </Row>
        </Card>
      </Row>
    </Col>
  );
}

export default CardDraw;
