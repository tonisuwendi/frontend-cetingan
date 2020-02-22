import React, { Component } from "react";
import "./ChatList.css";
import axios from "axios";
import { withAuth } from "../../context/AuthContext";

class ChatList extends Component {
  state = {
    search: []
  };

  handleSearch = e => {
    const value = e.target.value;
    if (value == "") {
      this.setState({
        search: []
      });
    } else {
      axios.get("http://localhost:5000/api/search/" + value).then(res => {
        this.setState({
          search: res.data
        });
      });
    }
  };

  render() {
    return (
      <div className="chat-list-wrapper">
        <div className="navbar">
          <div className="avatar">
            <img src="/images/avatar/co4.png" alt="avatar" />
          </div>
          <h2 className="name">{this.props.user.name}</h2>
          <form>
            <i className="fa fa-search"></i>
            <input
              type="text"
              name="search"
              placeholder="Cari teman.."
              autoComplete="off"
              onChange={this.handleSearch}
            />
          </form>
        </div>
        <div className="main">
          {this.state.search.map(data => {
            return (
              <div className="search">
                <div className="list">
                  <div className="avatar">
                    <img src="/images/avatar/co2.png" alt="avatar" />
                  </div>
                  <div className="name">
                    <h2 className="name">{data.name}</h2>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="chat"></div>
        </div>
      </div>
    );
  }
}

export default withAuth(ChatList);
