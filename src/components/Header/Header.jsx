import { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo-festival.png";

function Header() {
  const checkboxRef = useRef(null);

  const toggleMenu = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = !checkboxRef.current.checked;
    }
  };

  const closeMenu = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };

  return (
    <header className={styles.Header}>
      <Link to="/">
        <img
          src={logo}
          alt="Festival's logo"
          className={styles.logoFest}
          draggable="false"
        />
      </Link>

      <div className={styles.navBar}>
        <ul className={styles.nav}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/place">Place</Link>
          </li>
          <li>
            <Link to="/lineup">Lineup</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/tickets">Tickets</Link>
          </li>
        </ul>
      </div>

      <label
        htmlFor="nav-mobile-input"
        className={styles.nav_bar_btn}
        onClick={(e) => {
          e.preventDefault();
          toggleMenu();
        }}
      >
        <i className="bx bx-menu" style={{ color: "white" }}></i>
      </label>

      <input type="checkbox" hidden id="nav-mobile-input" ref={checkboxRef} />

      <label
        htmlFor="nav-mobile-input"
        className="nav_overlay"
        onClick={(e) => {
          e.preventDefault();
          toggleMenu();
        }}
      ></label>

      <div className="nav_mobile">
        <ul id="nav_list">
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/place" onClick={closeMenu}>
              Place
            </Link>
          </li>
          <li>
            <Link to="/lineup" onClick={closeMenu}>
              Lineup
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={closeMenu}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/tickets" onClick={closeMenu}>
              Tickets
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
