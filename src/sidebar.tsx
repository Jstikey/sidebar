import { FaTimes } from "react-icons/fa";
import logo from "../src/logo.svg";
import { links, social } from "./sideData";
import { useEffect, useRef } from "react";
import { useAppContext } from "./useAppContext";

export const Sidebar = () => {
  const context = useAppContext();
  const sideBarRef = useRef<HTMLBaseElement>(null);

  useEffect(() => {
    if (context?.showsidebar) {
      if (sideBarRef.current) {
        sideBarRef.current.style.width = "15rem";
      }
    } else {
      if (sideBarRef.current) {
        sideBarRef.current.style.width = "0";
      }
    }
  }, [context?.showsidebar]);
  //
  return (
    <aside className="side-bar showsidebar" ref={sideBarRef}>
      <div className="side-bar-header">
        <img src={logo} alt="" className="logo" />
        <button
          className="close-sidebar"
          onClick={() => context?.setShowSideBar(false)}
        >
          <FaTimes className="fatimes" />
        </button>
      </div>
      <ul className="link-container">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.url}>
              {link.icon} {link.text}
            </a>
          </li>
        ))}
      </ul>
      <ul className="social-icon">
        {social.map((item) => (
          <li key={item.id}>
            <a href={item.url}>{item.icon}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
