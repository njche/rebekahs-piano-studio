import { useState } from "react";
import { Link } from "react-scroll"
import { FaRegArrowAltCircleDown } from 'react-icons/fa'
function Navbar() {

    const [active, setActive] = useState(false)
    const handleClick = () => setActive(!active)

    return (
        <div className="Navbar">
            <div className={active ? "Mobile active" : "Mobile"} onClick={handleClick}>
                <p id="menu">Menu</p>
                <FaRegArrowAltCircleDown className={active ? "arrow active" : "arrow"} size="25px"/>
            </div>
            <div className={active ? "Navbar-menu active" : "Navbar-menu"}>
                    <Link className="Link" id="Link-1" to="About" smooth={true} offset={-50} duration={500}>
                        About
                    </Link> 
                    <Link className="Link" id="Link-2" to="Teaching-philosophy" smooth={true} offset={-50} duration={500}>
                        Teaching
                    </Link>
                    <Link className="Link" id="Link-3"  to="Lessons" smooth={true} offset={50} duration={500}>
                        Lessons
                    </Link> 
                    <Link className="Link" id="Link-4"  to="Compositions" smooth={true} offset={-100} duration={500}>
                        Composition
                    </Link> 
                    <Link className="Link" id="Link-5"  to="Performances" smooth={true} offset={-100} duration={500}>
                        Performance
                    </Link> 
                    <Link className="Link" id="Link-6"  to="Contact" smooth={true} offset={-100} duration={500}>
                        Contact
                    </Link>
                </div>
        </div>
    )
}

export default Navbar;