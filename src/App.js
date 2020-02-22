import React, { Component, Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./container/Auth/Login";
import Register from "./container/Auth/Register";
import Home from "./container/Home/Home";
import { AuthContextProvider } from "./context/AuthContext";

class App extends Component {
  render() {
    return (
      <AuthContextProvider>
        <Fragment>
          <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </BrowserRouter>
        </Fragment>
      </AuthContextProvider>
    );
  }
}

export default App;
