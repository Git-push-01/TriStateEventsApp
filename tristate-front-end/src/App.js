import React from "react";
import { Card } from "semantic-ui-react";
import "./App.css";
import Events from "./events";
import Navbar from "./components/Navbar";
import Register from "./components/Register"

const App = () => (
  <Card.Group
    centered
    rounded="true"
    style={{ minHeight: 100, padding: "1em 0em" }}
  >
  <Register/>
  <Navbar/>
    <Card>
      <Events />
    </Card>
  </Card.Group>
);

export default App;
