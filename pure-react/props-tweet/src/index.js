import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import moment from "moment";

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <Author author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

function Avatar({ hash }) {
  const url = `https://vignette3.wikia.nocookie.net/avatar/images/f/f8/Chong.png/revision/latest?cb=${hash}`;
  return <img src={url} className="avatar" alt="" />;
}

function Message({ text }) {
  return <div className="message">{text}</div>;
}

function Author({ author: { name, handle } }) {
  return (
    <span className="author">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

const Time = ({ time }) => (
  <span className="time">{moment(time).fromNow()}</span>
);

const ReplyButton = () => <i className="fa fa-reply reply-button" />;

function getRetweetCount(count) {
  return count > 0 && <span className="retweet-count">{count}</span> 
}

const RetweetButton = ({ count }) => (
  <span className="retweet-button">
    <i className="fa fa-retweet" />
    {getRetweetCount(count)}
  </span>
);
const LikeButton = ({ count }) => (
  <span className="like-button">
    <i className="fa fa-heart" />
    {count > 0 && <span className="like-count">{count}</span>}
  </span>
);
const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);
const testTweet = {
  message: "你是最強的Programmer~但是要aim low 活着就好...",
  gravatar: "20140127210142",
  author: {
    handle: "catperson",
    name: "GalFond",
  },
  likes: 2,
  retweets: 1,
  timestamp: "2020-09-30 21:24:37",
};

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector("#root"));
