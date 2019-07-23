import React from "react";
import ReactDOM from "react-dom";
import Visual from "../src/components/visual/Visual";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
const data1 = [
  {
    amount: "Base Salary",
    dollars: 155000
  },
  {
    amount: "Sign up Bonus",
    dollars: 4000
  },
  {
    amount: "RSU",
    dollars: 50000
  },
  {
    amount: "Performance Bonus",
    dollars: 31000
  }
];
const data2 = [
  {
    amount: "Base Salary",
    dollars: 155000
  }
];
function App() {
  return (
    <div className="App">
      <h1>Presentation for Nazeer Babu</h1>
      <Container>
        <Row>
          <Col auto>
            <Visual data={data1} comp={"Intuit"} total="240K" />
          </Col>
          <Col auto>
            <Visual data={data2} comp={"Cisco"} total="155K" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
