import React, { Component } from 'react';
import {Row, Col, Input, Button} from 'antd';
import MenuMain from './../../components/MenuMain';
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
          <Row>
            H - i - W
          </Row>
        </div>

        <div className="Container">
          <Row>
            Gains
          </Row>
        </div>

        <div className="Container">
          <Row>
            M - t - T
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
