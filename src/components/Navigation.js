import "../css/NavBar.css"
import { VscMenu }  from "react-icons/vsc"
import { useState } from "react"

function NavBar () {

    const [menuDown, setMenuDown] = useState(false) 

    const handleMenuClick = () => {
        setMenuDown(!menuDown)
    }

    return (
        <div className={`navbar ${menuDown ? "open" : ""}`}>
            <h1>SG</h1>
            <ul>
                <li>About Me</li>
                <li>Experience</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            <button className="navbar-hamburger" onClick={handleMenuClick}>
                <VscMenu className="menu"/>
            </button>
        </div>
    )

}

export default NavBar