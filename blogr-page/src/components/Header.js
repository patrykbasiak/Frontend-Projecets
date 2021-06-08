import logo from "../images/logo.svg";
import Buttons from "./Buttons";
import Menu from "./Menu";
import { useState, useEffect } from "react";
import { footer } from "../data/footer";

const Header = () => {
  const [navLinks, setNavLinks] = useState(footer);
  const [isOpen, setIsOpen] = useState(true);
  const [width, setWidth] = useState(768);

  useEffect(() => {
    if (window.innerWidth > width) {
      setIsOpen(true);
    }
  }, []);
  return (
    <div>
      <header className="absolute p-5 flex items-center justify-between w-full">
        <div>
          <img src={logo} alt="logo" className="logo"/>
        </div>
        {/* links */}
        {isOpen && (
          <>
            <nav className="navbar">
              <ul>
                {navLinks.map(({ id, title, links }) => (
                  <li key={id}>{title}</li>
                ))}
              </ul>
              <Buttons />
            </nav>
          </>
        )}
        

        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>
    </div>
  );
};

export default Header;
