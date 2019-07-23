import React from "react";
import ReactDOM from "react-dom";
import Visual from "../src/components/visual/Visual";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h1>Presentation for Nazeer Babu</h1>
      <Visual />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
