import "../css/NavBar.css"
import { VscMenu }  from "react-icons/vsc"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom";

function NavBar () {

    const [menuDown, setMenuDown] = useState(false) 
    const location = useLocation();

    const handleMenuClick = () => {
        setMenuDown(!menuDown)
    }

    return (
        <nav className={`navbar ${menuDown ? "open" : ""}`}>
            <h1>SG</h1>
            <ul>
                <Link to="/" className={location.pathname === "/" ? "current-location" : ""}>About Me</Link>
                <Link to="/experience" className={location.pathname === "/experience" ? "current-location" : ""}>Experience</Link>
                <Link to="/projects" className={location.pathname === "/projects" ? "current-location" : ""}>Projects</Link>
                <Link to="/contact" className={location.pathname === "/contact" ? "current-location" : ""}>Contact</Link>
            </ul>
            <button className="navbar-hamburger" onClick={handleMenuClick}>
                <VscMenu className="menu"/>
            </button>
        </nav>
    )

}

export default NavBar