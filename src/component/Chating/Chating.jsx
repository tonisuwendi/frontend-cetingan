import React, { Component, Fragment } from "react";
import "./Chating.css";

const Chating = props => {
  return (
    <div className="chating-wrapper">
      <div className="top-profile">
        <div className="avatar">
          <img src="/images/avatar/co5.png" alt="avatar" />
        </div>
        <div className="text">
          <p className="name">{props.data.name}</p>
        </div>
      </div>
      <div className="chat">
        <div className="main">
          {props.chating.map(chat =>
            chat.sender == props.my.id ? (
              <Fragment>
                <div class="speech-bubble speech-bubble-me" key={chat.id}>
                  <span>{chat.message}</span>
                </div>
                <br />
                <div className="clearfix"></div>
              </Fragment>
            ) : (
              <Fragment>
                <div class="speech-bubble speech-bubble-they" key={chat.id}>
                  <span>{chat.message}</span>
                </div>
                <br />
                <div className="clearfix"></div>
              </Fragment>
            )
          )}
          {"  "}
        </div>
      </div>
    </div>
  );
};

export default Chating;
