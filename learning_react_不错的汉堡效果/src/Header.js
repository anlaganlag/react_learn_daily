import React from 'react'
import Navigation from './Navigation'
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="border-b p-3 flex justify-between items-center">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/content">Content</Link>
            </li>
          </ul>
            <Navigation />
        </header>
    )
}

export default Header
