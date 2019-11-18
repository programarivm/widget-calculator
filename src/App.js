import React from 'react';
import { Calc as WidgetCalc } from "./components/widget/Calc.js";
import { Col, Container, Row } from 'reactstrap';
import './App.css';

function App() {
  return (
    <Container className="App mt-5">
      <Row>
        <Col lg="3"></Col>
        <Col lg="6">
          <WidgetCalc />
        </Col>
        <Col lg="3"></Col>
      </Row>
    </Container>
  );
}

export default App;
