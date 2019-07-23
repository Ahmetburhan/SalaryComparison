import React from "react";
import ReactDOM from "react-dom";
import Visual from "../src/components/visual/Visual";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
const data1 = [
  {
    amount: "Base",
    dollars: 166400
  },
  {
    amount: "Sign UP",
    dollars: 3000
  },
  {
    amount: "RSU",
    dollars: 50000
  },
  {
    amount: "Performance",
    dollars: 16640
  }
];
const data2 = [
  {
    amount: "Base",
    dollars: 155000
  }
];
function App() {
  return (
    <div className="App">
      <h1>Presentation for Nazeer Babu</h1>
      <Container>
        <Row>
          <Col>
            <Visual data={data1} comp={"Intuit"} total="236K" />
          </Col>
          {/* </Row>
        <Row> */}
          <Col>
            <Visual data={data2} comp={"Cisco"} total="155K" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
