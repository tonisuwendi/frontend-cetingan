import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

class Register extends Component {
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
                  Daftar Cetingan. Atau <Link to="/login">masuk</Link> jika
                  sudah punya akun.
                </p>
                <input type="text" name="name" placeholder="Nama Lengkap" />
                <input type="emai" name="email" placeholder="Alamat Email" />
                <input
                  type="password"
                  name="password"
                  placeholder="Kata Sandi"
                />
                <button>Daftar</button>
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
