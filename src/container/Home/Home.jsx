import React, { Component, Fragment } from "react";
import "./Home.css";
import ChatList from "../../component/ChatList/ChatList";
import { withAuth } from "../../context/AuthContext";
import { Redirect } from "react-router-dom";
import WelcomeChat from "../../component/WelcomeChat/WelcomeChat";

class Home extends Component {
  render() {
    if (!this.props.isLoggedIn) return <Redirect push to="/login" />;
    return (
      <div className="home-wrapper">
        <ChatList />
        <WelcomeChat />
      </div>
    );
  }
}

export default withAuth(Home);
