import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <Author />
        <Time />
        <Message />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      src="https://tse4-mm.cn.bing.net/th/id/OIP.RHOOfSEJH7GtWh6gU7165QAAAA?pid=Api&rs=1"
      className="avatar"
      alt=""
    />
  );
}

function Message() {
  return (
    <div className="message">
      你是最強的Programmer~但是要aim low 活着就好...
    </div>
  );
}

function Author() {
  return (
    <span className="author">
      <span className="name">GalFond</span>
      <span className="handle">@我的帳號</span>
    </span>
  );
}

const Time = () => <span className="time">3h ago</span>;

const ReplyButton = () => <i className="fa fa-reply reply-button" />;

const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;
const LikeButton = () => <i className="fa fa-heart like-button" />;

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button" />
    );

ReactDOM.render(<Tweet />, document.querySelector("#root"));
