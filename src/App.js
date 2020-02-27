import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./container/Auth/Login";
import Register from "./container/Auth/Register";
import Home from "./container/Home/Home";
import { AuthContextProvider } from "./context/AuthContext";
import MainChat from "./container/MainChat/MainChat";

const MoveChat = props => {
  const username = props.match.params.username;
  return <Redirect push to={`/${username}`} />;
};

const Logout = () => {
  sessionStorage.removeItem("token");
  document.location.href = "/login";
};

class App extends Component {
  render() {
    return (
      <AuthContextProvider>
        <Fragment>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/user/:username" component={MoveChat} />
              <Route path="/logout" component={Logout} />
              <Route path="/:username" component={MainChat} />
            </Switch>
          </BrowserRouter>
        </Fragment>
      </AuthContextProvider>
    );
  }
}

export default App;
