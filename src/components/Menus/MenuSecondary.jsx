import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

class MenuMain extends Component {
  state = {
    current: 'mail',
  };

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          className={this.props.className}
        >
          <Menu.Item key="home">
            <Link href="/" to="/">Home</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default MenuMain;
