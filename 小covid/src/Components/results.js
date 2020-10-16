import React from "react";
import "./resultsStyles.css";

function Results({ covid_stats }) {
  return (
    <div className="results-container">
      {covid_stats.map((data) => (
        <div className="result-container">
          <div className="result-country">
            国家/省份: {data?.province || data?.country}
          </div>
          <div className="result-confirmed">感染:{data.confirmed}</div>
          <div className="result-death">死亡: {data.deaths}</div>
          <div className="result-recovered">恢复: {data.recovered}</div>
        </div>
      ))}
    </div>
  );
}

export default Results;
