import React, { Component } from 'react';
import { Card } from 'antd';

class CardHow extends Component {
  render(){
    return (
      <div>
        <Card style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    );
  }
}

export default CardHow;
