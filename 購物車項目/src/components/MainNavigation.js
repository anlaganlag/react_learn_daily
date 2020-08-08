import React from 'react'
import { NavLink } from 'react-router-dom';

import './MainNavigation.css';



const MainNavigation = props => (
    <header className="main-navigation">
        <nav>
            <ul>
                <li>
                    <NavLink to="/">产品</NavLink>
                </li>
                <li>
                    <NavLink to="/cart">购物车 ({props.cartItemNumber})</NavLink>
                </li>
            </ul>
        </nav>
    </header>

);
export default MainNavigation;
