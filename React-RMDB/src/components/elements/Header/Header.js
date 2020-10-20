import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="rmdb-header">
    <div className="rmdb-header-content">
      <Link to="/">
        <img className="rmdb-logo" src="https://img3.doubanio.com/f/biz/babd31b931ca9686a21a65befb6df0b52e15c3f9/pics/biz/activity/photograph/winter-2016/logo.png" alt="rmdb-logo" />
      </Link>
      <img className="rmdb-tmdb-logo" src="https://www.douyudy.com/template/skin1/asset/img/logo_golden.png" size="70%" alt="tmdb-logo" />
    </div>
  </div>
)

export default Header;