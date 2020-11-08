import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Events from "./components/Events";
import Navbar from "./components/Navbar";
import Register from "./components/Register"
import Login from "./components/Login"
import Home from "./components/Home"



class App extends Component {
  render() {
    return (
    <Router>
      <div>
    <Navbar/>
    <Route exact path="/" component={ Home } />
    <Route exact path="/register" component={ Register } />
      <div className="container">
    <Route exact path="/login" component={ Login } />
    <Route exact path="/events" component={ Events } />
    </div>
    </div>
    </Router>
);
}
}
export default App;
