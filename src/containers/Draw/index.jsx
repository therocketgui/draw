import React, { Component } from 'react';
import {Row, Col, Input, Button, Card, Icon, Avatar} from 'antd';

class Draw extends Component {

  render(){
    return (
      <div>
        <div
          className="Draw-Header"
          // style={{backgroundImage: `url(/src/images/random-bg.png)`}}
        >
          <Row type="flex" justify="space-between" align="bottom">
            <Col span={6} />
            <Col span={18}>
              <div className="title">
                <h1>EOS - Whale Edition</h1>
              </div>
            </Col>
          </Row>
        </div>

        <div className="Draw-Main">
          <div className="Draw-Main-Sub">
            <Row  type="flex" justify="space-between" align="middle">
              <Col span={6}></Col>
              <Col span={6}><div className="center-text"><p>Pot Size: <span>17,837</span> EOS (1,230,000$)</p></div></Col>
              <Col span={6}><div className="center-text"><p>Participants: <span>2,345</span></p></div></Col>
              <Col span={6}><div className="center-text"><p>Ends in approx. <span>5 days, 23 hours</span></p></div></Col>
            </Row>
          </div>
          <div className="Draw-Blocs">
            <Row>
              <Col span={6}>
                <div className="Draw-Bloc Logo-Bloc">
                  <div className="logo">
                    <Avatar
                      size="large"
                      className="avatar rounded mb-15"
                      src={`/src/images/eos.png`}
                      style={{backgroundColor: '#F7F7F7'}}
                    />
                  </div>
                  <div className="Draw-Card infos">
                    <div>
                      <h3>Infos</h3>
                      <p>Starts on block 342.123</p>
                      <p>Ends on block 352.123</p>
                      <p>Duration Estimation: 12 days</p>
                    </div>
                    <div className="cta">
                      <Button
                        className="btn-rounded"
                        size="large"
                      >
                        Join Draw
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col span={18}>
                <div className="Draw-Bloc Draw-Card description">
                  <div>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolormque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consecteturd.
                    </p>
                    <p>
                      0.5% of the pot will go to Charity X. Check their website here: www.charityX.com.
                    </p>
                    <p>
                      Warnings: Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.
                    </p>
                    <p>
                      Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Draw;
