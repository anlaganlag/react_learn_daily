import React from 'react'
import Navigation from './Navigation'

function Header({count}) {
    return (
        <header className="border-b p-3 flex justify-between items-center">
            <span className="font-bold"> 計數器 </span>
            <Navigation />
        </header>
    )
}

export default Header
