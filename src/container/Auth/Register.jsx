import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Auth.css";
import axios from "axios";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    btnText: "Daftar",
    error: "",
    successRegis: false
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      btnText: "Loading..."
    });
    axios
      .post("http://localhost:9000/api/register", {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        if (res.data.success == false) {
          this.setState({
            error: res.data.message,
            btnText: "Daftar"
          });
        } else {
          this.setState({
            error: false,
            successRegis: true,
            btnText: "Daftar"
          });
        }
      });
  };

  render() {
    if (this.props.isLoggedIn) return <Redirect push to="/" />;
    return (
      <Fragment>
        {this.state.successRegis ? (
          <Fragment>
            <div className="overlay"></div>
            <div className="alert-success">
              <h2>
                <i className="far fa-check-circle"></i> Selamat
              </h2>
              <p>
                Pendaftaran berhasil. Silakan cek email kamu dan verifikasi akun
                supaya bisa login. Cek juga folder spam jika tidak ada email
                masuk.
              </p>
              <Link to="/login">Oke siap</Link>
            </div>
          </Fragment>
        ) : null}
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
                  Daftar Cetingan. Atau <Link to="/login">masuk</Link> jika
                  sudah punya akun.
                </p>
                {this.state.error != "" ? (
                  <div className="error">
                    <p>{this.state.error}</p>
                  </div>
                ) : null}
                <input
                  type="text"
                  name="name"
                  placeholder="Nama Lengkap"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Alamat Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Kata Sandi"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}>
                  {this.state.btnText}
                </button>
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

export default Register;
