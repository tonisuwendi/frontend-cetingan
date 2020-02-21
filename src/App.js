import React, { Component, Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./container/Auth/Login";
import Register from "./container/Auth/Register";

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
