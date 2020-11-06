import React from "react";
import { Card } from "semantic-ui-react";
import "./App.css";
import Events from "./events";
import Navbar from "./components/Navbar";

const App = () => (
  <Card.Group
    centered
    rounded="true"
    style={{ minHeight: 100, padding: "1em 0em" }}
  >
    <Card>
      <Events />
    </Card>
  </Card.Group>
);

export default App;
