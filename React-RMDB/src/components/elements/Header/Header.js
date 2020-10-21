import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="rmdb-header">
    <div className="rmdb-header-content">
      <Link to="/">
      <img className="rmdb-logo" src="https://s1.ax1x.com/2020/10/21/B9H59J.png" alt="rmdb-logo" />

      </Link>
      <img className="rmdb-tmdb-logo" src="1.jpg" size="70%" alt="tmdb-logo" />
    </div>
  </div>
)

export default Header;