import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Auth.css";
import { withAuth } from "../../context/AuthContext";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: ""
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    sessionStorage.removeItem("token");
    this.props.login(this.state);
  };

  render() {
    if (this.props.isLoggedIn) return <Redirect push to="/" />;
    return (
      <Fragment>
        <div className="login-container">
          <div className="form">
            <div className="main">
              <h2 className="big-title">
                Ngobrol dengan siapa saja dan dimana saja.
              </h2>
              <p>
                Cara baru untuk berkirim pesan dan ngobrol dengan teman-teman
                secara cepat dan mudah tanpa perlu ribet lagi.
              </p>
              <form>
                <p>
                  Login Cetingan. Atau <Link to="/register">daftar</Link> jika
                  belum punya akun.
                </p>
                {this.props.resLogin.success == false ? (
                  <div className="error">
                    <p>{this.props.resLogin.message}</p>
                  </div>
                ) : null}
                <input
                  type="emai"
                  name="email"
                  placeholder="Alamat Email"
                  onChange={this.handleChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Kata Sandi"
                  onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}>
                  {this.props.btnText}
                </button>
                <Link to="#">
                  <small>Lupa kata sandi?</small>
                </Link>
              </form>
            </div>
          </div>
          <div className="img">
            <div className="main">
              <img src="/images/icon/auth.png" alt="icon auth" />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withAuth(Login);
