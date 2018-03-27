import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import screenshots from '../../img/screenshots.png';

const Overview= () => {
  return (
    <Grid>
      <Row className="Overview show-grid">
        <Col md={6} mdOffset={1}>
          <Image src={screenshots} className="OvImg" />
        </Col>
        <Col md={4} className="OvTxt">
          <h2 className="text-success">What is StreetFleet?</h2>
          <p>StreetFleet is a platform that helps you manage every vehicle in your fleet in real time.</p>
          <p>It records the position at every time and allows you to see their distance traveled and routs in an friendly way that is easy to understand.</p>
        </Col>
      </Row>
    </Grid>
  );
};

export default Overview;
