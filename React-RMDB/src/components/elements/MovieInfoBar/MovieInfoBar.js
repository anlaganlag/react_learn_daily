import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { calcTime, convertMoney } from '../../../helpers.js';
import './MovieInfoBar.css';

const MovieInfoBar = ({ time, budget, revenue }) => (
  <div className="rmdb-movieinfobar">
    <div className="rmdb-movieinfobar-content">
      <div className="rmdb-movieinfobar-content-col">
        <FontAwesome className="fa-time" name="clock-o" size="2x" />
        <span className="rmdb-movieinfobar-info">時長: {time ? calcTime(time):"無信息"}</span>
      </div>
      <div className="rmdb-movieinfobar-content-col">
        <FontAwesome className="fa-budget" name="money" size="2x" />
        <span className="rmdb-movieinfobar-info">成本:{budget?convertMoney(budget):"未知"}</span>
      </div>
      <div className="rmdb-movieinfobar-content-col">
        <FontAwesome className="fa-revenue" name="ticket" size="2x" />
        <span className="rmdb-movieinfobar-info">票房:{revenue?convertMoney(revenue):"未知"}</span>
      </div>
    </div>
  </div>
)

MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number
}

export default MovieInfoBar;