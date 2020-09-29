import React from "react";
import PropTypes from "prop-types";

import moment from "moment";

export  function FileIcon({ file }) {
  let icon = "fa-file-text-o";
  if (file.type === "folder") {
    icon = "fa-folder";
  }
  return (
    <td className="file-icon">
      <i className={`fa ${icon}`} />
    </td>
  );
}

export default function FileName({ file }) {
  return (
    <>
      <FileIcon file={file} />
      <td className="file-name"> {file.name} </td>
    </>
  );
}

export const CommitMessage = ({ commit }) => (
  <td className="commit-message">{commit.message}</td>
);

export const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return <span className="time">{timeString}</span>;
};

Time.propTypes = {
  time: PropTypes.string.isRequired,
};
CommitMessage.propTypes = {
  commit: PropTypes.object.isRequired,
};
FileName.propTypes = {
  file: PropTypes.object.isRequired,
};
FileIcon.propTypes = {
  file: PropTypes.object.isRequired,
};
