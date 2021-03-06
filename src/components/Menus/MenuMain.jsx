import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import Scrollchor from 'react-scrollchor';

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
          <Menu.Item key="howitworks" className="no-display">
            <Scrollchor to="#howitworks" className="nav-link">How it Works</Scrollchor>
          </Menu.Item>
          <Menu.Item key="gains" className="no-display">
            <Scrollchor to="#gains" className="nav-link">Gains</Scrollchor>
          </Menu.Item>
          <Menu.Item key="meettheteam" className="no-display">
            <Scrollchor to="#meettheteam" className="nav-link">Meet the Team</Scrollchor>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default MenuMain;
