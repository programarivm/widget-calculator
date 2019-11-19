import React from 'react';
import { Widget } from "./components/Widget.js";
import { Col, Container, Row } from 'reactstrap';
import './App.css';

function App() {
  return (
    <Container className="App mt-5">
      <Row>
        <Col lg="3"></Col>
        <Col lg="6">
          <Widget />
        </Col>
        <Col lg="3"></Col>
      </Row>
    </Container>
  );
}

export default App;
