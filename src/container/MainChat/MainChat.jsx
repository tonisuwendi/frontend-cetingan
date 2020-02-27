import React, { Component, Fragment } from "react";
import "./MainChat.css";
import ChatList from "../../component/ChatList/ChatList";
import { withAuth } from "../../context/AuthContext";
import { Redirect } from "react-router-dom";
import Chating from "../../component/Chating/Chating";
import Axios from "axios";

class MainChat extends Component {
  state = {
    user: [],
    chat: [],
    message: "",
    my: []
  };

  componentDidMount() {
    this.getUser();
    this.myProfile();
  }

  getUser = () => {
    this.setState({
      user: []
    });
    const username = this.props.match.params.username;
    Axios.get(
      "https://mysterious-reaches-64304.herokuapp.com/api/" + username,
      {
        headers: {
          Authorization: sessionStorage.getItem("token")
        }
      }
    ).then(res => {
      this.setState({
        user: res.data
      });
      this.interval = setInterval(() => this.getChat(res), 1000);
      this.getChat(res);
    });
  };

  myProfile = () => {
    Axios.get("https://mysterious-reaches-64304.herokuapp.com/api/profile", {
      headers: {
        Authorization: sessionStorage.getItem("token")
      }
    }).then(res => {
      this.setState({
        my: res.data
      });
    });
  };

  getChat = res => {
    Axios.get(
      "https://mysterious-reaches-64304.herokuapp.com/api/message/" +
        res.data.id,
      {
        headers: {
          Authorization: sessionStorage.getItem("token")
        }
      }
    ).then(res => {
      this.setState({
        chat: res.data
      });
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleKeyPres = e => {
    if (e.key == "Enter") {
      const headers = {
        Authorization: sessionStorage.getItem("token")
      };
      const data = {
        receiver: this.state.user.id,
        message: this.state.message
      };
      console.log(this.state.message);
      document.getElementById("input").value = "";
      Axios.post(
        "https://mysterious-reaches-64304.herokuapp.com/api/send",
        data,
        {
          headers: headers
        }
      ).then(res => {
        this.setState({
          message: ""
        });
        console.log(res);
      });
    }
  };

  render() {
    if (!this.props.isLoggedIn) return <Redirect push to="/login" />;
    return (
      <div className="mainchat-wrapper">
        <ChatList />
        {this.state.chating != [] ? (
          <Chating
            data={this.state.user}
            chating={this.state.chat}
            my={this.state.my}
          />
        ) : null}
        <div className="typing">
          <input
            type="text"
            name="message"
            placeholder="Ketik pesan..."
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPres}
            id="input"
            autoComplete="off"
          />
        </div>
      </div>
    );
  }
}

export default withAuth(MainChat);
