import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import {Row, Col} from 'antd';
import { Link } from 'react-router-dom';
import MenuMain from './Menus/MenuMain';

class Footer extends Component {
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
      <div className="Footer">
        <div>
          - Made by Crypto Hackers from Paris & London -
        </div>
        <div>
          © company X
        </div>
      </div>
    );
  }
}

export default Footer;
