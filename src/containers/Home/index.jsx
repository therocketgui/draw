import React, { Component } from 'react';
import {Row, Col, Input, Button, Card, Icon, Avatar} from 'antd';
import MenuMain from './../../components/Menus/MenuMain';
import CardDraw from './../../components/Cards/CardDraw';
import CardTeam from './../../components/Cards/CardTeam';
import CardHow from './../../components/Cards/CardHow';
import Rocket from 'react-svg-loader!./../../images/rocket.svg';

class Home extends Component {

  render(){
    return (
      <div>
        <div className="Container">
          <Row>
            <div>
              <MenuMain />
            </div>
          </Row>
          <Row>
            <Col span={12}>
              <h1>This is h1</h1>
              <Input placeholder="Email" />
              <Button>Send</Button>
            </Col>
            <Col span={12}>
              <div>
                <Rocket />
              </div>
            </Col>
          </Row>
        </div>

        <div className="Container">
          <Row gutter={8}>
            <Col span={8}><CardDraw /></Col>
            <Col span={8}><CardDraw /></Col>
            <Col span={8}><CardDraw /></Col>
            <Col span={8}><CardDraw /></Col>
            <Col span={8}><CardDraw /></Col>
            <Col span={8}><CardDraw /></Col>
          </Row>
        </div>

        <div className="Container">
          <Row type="flex" justify="space-around" align="middle">
            <h2>Lorem Ipsum</h2>
          </Row>
          <Row>
            <Col span={12}>
              <CardHow />
              <CardHow />
            </Col>
            <Col span={12}>
              <CardHow />
              <CardHow />
            </Col>
          </Row>
        </div>

        <div className="Container">
          <Row type="flex" justify="space-around" align="middle">
            <h2>Lorem Ipsum</h2>
          </Row>
          <Row>
            <CardHow />
          </Row>
          <Row>
            Illustration
          </Row>
          <Row>
            <Col span={12}><CardHow /></Col>
            <Col span={12}><CardHow /></Col>
          </Row>
        </div>

        <div className="Container">
          <Row type="flex" justify="space-around" align="middle">
            <h2>Lorem Ipsum</h2>
          </Row>
          <Row type="flex" justify="space-around" align="middle">
            <Col span={12}><CardTeam /></Col>
            <Col span={12}><CardTeam /></Col>
          </Row>
        </div>

        <div className="Container">
          <Row>
            Footer
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;
