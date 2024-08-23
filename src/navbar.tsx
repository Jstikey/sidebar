import { FaBars } from "react-icons/fa";
import logo from "../src/logo.svg";
import { useEffect, useRef, useState } from "react";
import { social, links } from "./data";

export const Navbar = () => {
  const [showLink, setShowLink] = useState(false);
  const linksContainerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    const linksHegiht = linksRef?.current?.getBoundingClientRect().height;
    if (showLink) {
      if (linksContainerRef.current) {
        linksContainerRef.current.style.height = `${linksHegiht}px`;
      }
    } else {
      if (linksContainerRef.current) {
        linksContainerRef.current.style.height = `0px`;
      }
    }
  }, [showLink]);
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="" />
          <button onClick={() => setShowLink(!showLink)} className="toggle">
            <FaBars className={!showLink ? "fabarsInverse" : " fabars"} />
          </button>
        </div>
        <div ref={linksContainerRef} className="links-container">
          <ul ref={linksRef}>
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((link) => (
            <li key={link.id}>
              <a href={link.url}>{link.icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
