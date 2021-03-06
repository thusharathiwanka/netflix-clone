import { useEffect, useState } from "react";
import "../styles/Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src="images/logo.png" alt="netflix-logo" />
      <img
        className="nav__avatar"
        src="images/avatar.png"
        alt="netflix-avatar"
      />
    </div>
  );
};

export default Nav;
