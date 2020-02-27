import React, { Component, Fragment } from "react";
import "./WelcomeChat.css";

class WelcomeChat extends Component {
  render() {
    return (
      <div className="welcome-chat-wrapper">
        <div className="welcome">
          <img src="/images/icon/home.png" alt="icon" />
          <h2>Selamat datang di Cetingan</h2>
          <p>
            Tempat ngobrol dengan teman-teman darimana saja serta cepat, mudah
            dan menyenangkan. Pesan yang Anda kirim tidak akan diketahui oleh
            pihak ketiga karena di enkripsi menggunakan teknologi acrom-end
            by-two.
          </p>
          <p>
            <strong>Happy Chating!</strong>
          </p>
        </div>
      </div>
    );
  }
}

export default WelcomeChat;
