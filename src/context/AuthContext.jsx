import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const axiosReq = axios.create();
const AuthContext = React.createContext();

axiosReq.interceptors.request.use(config => {
  const token = sessionStorage.getItem("token");
  config.headers.Authorization = token;
  return config;
});

export class AuthContextProvider extends Component {
  state = {
    token: sessionStorage.getItem("token") || "",
    isLoggedIn: false,
    resLogin: {},
    btnText: "Masuk",
    user: {}
  };

  componentDidMount() {
    this.initUser();
  }

  initUser = () => {
    return axiosReq.get("http://localhost:9000/api/profile").then(res => {
      if (res.status === 200) {
        this.setState({
          isLoggedIn: true,
          user: res.data
        });
      } else {
        this.setState({
          isLoggedIn: false
        });
        sessionStorage.removeItem("token");
      }
    });
  };

  login = credentials => {
    this.setState({
      btnText: "Loading..."
    });
    return axiosReq
      .post("http://localhost:9000/api/login", credentials)
      .then(res => {
        if (res.data.success == false) {
          this.setState({
            resLogin: res.data,
            btnText: "Masuk"
          });
        } else {
          const { token } = res.data;
          sessionStorage.setItem("token", token);
          this.setState({
            token: token,
            isLoggedIn: true,
            resLogin: res.data,
            btnText: "Masuk"
          });
          this.initUser();
        }
      });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          login: this.login,
          ...this.state
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export const withAuth = WrappedComponent => {
  return class extends Component {
    render() {
      return (
        <AuthContext.Consumer>
          {context => <WrappedComponent {...this.props} {...context} />}
        </AuthContext.Consumer>
      );
    }
  };
};
