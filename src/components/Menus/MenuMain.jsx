import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

class MenuMain extends Component {
  state = {
    current: 'mail',
  };

  handleClick = (e) => {
    console.log('click ', e);
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
          <Menu.Item key="howitworks" className="no-display">
            How it Works
          </Menu.Item>
          <Menu.Item key="gains" className="no-display">
            Gains
          </Menu.Item>
          <Menu.Item key="meettheteam" className="no-display">
            Meet the Team
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default MenuMain;
