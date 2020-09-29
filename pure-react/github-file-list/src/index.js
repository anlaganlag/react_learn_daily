import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import "./index.css";
import {testFiles} from "./data"
import FileName,{CommitMessage,Time} from "./components/tool"


const FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {files.map((file) => (
        <FileListItem key={file.id} file={file} />
      ))}
    </tbody>
  </table>
);


const FileListItem = ({ file }) => (
  <tr className="file-list-item">

    <td>
      <FileName file={file} />
    </td>
    <td>
      <CommitMessage commit={file.latestCommit} />
    </td>
    <td className="age" >
      <Time time={file.updated_at} />
    </td>
  </tr>
);







FileList.propTypes = {
  files: PropTypes.array,
};



FileListItem.propTypes = {
  file: PropTypes.object.isRequired,
};


ReactDOM.render(
  <FileList files={testFiles} />,
  document.querySelector("#root")
);
