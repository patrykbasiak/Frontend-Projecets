import logo from "../images/logo.svg"
import Buttons from "./Buttons"
import Menu from "./Menu"
import { useState } from "react"
import { footer } from '../data/footer'

const Header = () => {
    const [navLinks, setNavLinks] = useState(footer)
    return (
        <div>
            <header className="absolute p-5">
                <div>
                    <img src={logo} alt="logo" />
                </div>
                {/* links */}
                <nav>
                    <ul>
                        {navLinks.map(({ id, title, links }) => (
                            <li key={id}>{title}</li>
                        ))}
                    </ul>
                </nav>
                <Buttons />
                <Menu/>
            </header>
        </div>
    )
}

export default Header
