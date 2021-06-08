import logo from "../images/logo.svg";
import { footer } from "../data/footer";
import { useState, useEffect } from "react";

const Footer = () => {
  const [footerLinks, setFooterLinks] = useState(footer);

  return (
    <>
      <footer className="footer text-center md:text-left md:grid md:grid-cols-2 lg:py-10 px-5 md:flex md:justify-around ">
        <img src={logo} alt="logo" className="block mx-auto pt-10 md:mx-0 " />
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
          {footerLinks.map(({ id, title, links }) => (
            <ul key={id}>
              <h4 className="mt-10 mb-5 text-lg">{title}</h4>
              {links.map((link) => (
                <li className="py-3" key={link}>
                  {link}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div class="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/patrykbasiak?tab=repositories" target="_blank">
            Patryk Basiak
          </a>
          .
        </div>
      </footer>
    </>
  );
};

export default Footer;
