import React from 'react';
import { Row, Button } from 'antd';
import Scrollchor from 'react-scrollchor';

function SubCta() {
  return (
    <Row type="flex" justify="space-around" align="middle">
      <Button
        className="Sub-Cta"
      >
        <Scrollchor to="#register" className="nav-link">Join Our Pre-Launch List</Scrollchor>
      </Button>
    </Row>
  );
}

export default SubCta;
