import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import {Row, Col} from 'antd';
import { Link } from 'react-router-dom';

class MenuMain extends Component {
  state = {
  current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render(){
    return (
      <div>
        <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        >
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="howitworks">
            How it Works
          </Menu.Item>
          <Menu.Item key="gains">
            Gains
          </Menu.Item>
          <Menu.Item key="meettheteam">
            Meet the Team
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default MenuMain;
