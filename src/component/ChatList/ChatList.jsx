import React, { Component } from "react";
import "./ChatList.css";
import axios from "axios";
import { withAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

class ChatList extends Component {
  state = {
    search: [],
    wechat: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:9000/api/wechat", {
        headers: {
          Authorization: sessionStorage.getItem("token")
        }
      })
      .then(res => {
        this.setState({
          wechat: res.data
        });
      });
  }

  handleSearch = e => {
    const value = e.target.value;
    if (value == "") {
      this.setState({
        search: []
      });
    } else {
      axios
        .get("http://localhost:9000/api/search/" + value, {
          headers: {
            Authorization: sessionStorage.getItem("token")
          }
        })
        .then(res => {
          this.setState({
            search: res.data
          });
        });
    }
  };

  removeSearch = () => {
    let searchInput = document.querySelector("input");
    searchInput.value = "";
    this.setState({
      search: []
    });
  };

  render() {
    return (
      <div className="chat-list-wrapper">
        <div className="navbar">
          <div className="avatar">
            <img src="/images/avatar/co4.png" alt="avatar" />
          </div>
          <h2 className="name">{this.props.user.name}</h2>
          <Link to="/logout" title="Keluar">
            <i className="fa fa-sign-out-alt"></i>
          </Link>
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
          {this.state.search == "" ? (
            // <div className="contact">
            //   {this.state.wechat.map(wc => (
            //     <Link to="/user/tonisuwendi" onClick={this.removeSearch}>
            //       <div className="list">
            //         <div className="avatar">
            //           <img src="/images/avatar/co3.png" alt="avatar" />
            //         </div>
            //         <div className="text">
            //           <p className="name">Toni Suwendi</p>
            //           <p className="chat">Terkirim: Kamu lagi apa?</p>
            //         </div>
            //       </div>
            //     </Link>
            //   ))}
            // </div>
            <div className="contact">
              <div className="list">
                <div className="text">
                  <p>Cari orang di kolom pencarian</p>
                </div>
              </div>
            </div>
          ) : null}
          {this.state.search.map(data => {
            return (
              <div className="search" key={data.id}>
                <Link to={`/user/${data.username}`} onClick={this.removeSearch}>
                  <div className="list">
                    <div className="avatar">
                      <img src="/images/avatar/co2.png" alt="avatar" />
                    </div>
                    <div className="name">
                      <h2 className="name">{data.name}</h2>
                    </div>
                  </div>
                </Link>
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
