import React from "react";

const Notice = ({ type, text }) => {
  return <div className={`notice notice-${type}`}>{text}</div>;
};

export default Notice;
