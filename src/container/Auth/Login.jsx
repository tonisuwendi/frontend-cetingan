import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

class Login extends Component {
  render() {
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
                <input type="emai" name="email" placeholder="Alamat Email" />
                <input
                  type="password"
                  name="password"
                  placeholder="Kata Sandi"
                />
                <button>Masuk</button>
                <Link to="">
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

export default Login;
