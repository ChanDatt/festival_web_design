import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/images/logo-festival.png";

function Header() {
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
    </header>
  );
}

export default Header;
