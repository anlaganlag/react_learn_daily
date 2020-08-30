import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navigation() {
    const [showMenu, setShowMenu] = useState(false)

    let menu 
    let menuMask
    if (showMenu){
        menu =
        <div
            className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"
        >
            菜單
        </div>

        menuMask = 
        <div 
            className = "bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
            onClick = {()=>setShowMenu(false)}
        > 
        </div>
        
    }
    return (
        <nav>
            <span className="text-xl p-1">
                <FontAwesomeIcon
                    icon ={faBars}
                    onClick={
                        // ()=>console.log("被點擊了")
                        ()=>setShowMenu(!showMenu)
                    }
                />
            </span>
            {menuMask}
            {menu}
        </nav>
    )
}

export default Navigation
