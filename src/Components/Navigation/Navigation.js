import { NavLink } from "react-router-dom";
import styles from "./styleNav.module.css";
// import { Link } from 'react-router-dom'

const Navigation = () => (
  <nav>
    <NavLink
      exact
      to="/"
      className={styles.linkHead}
      activeClassName={styles.activeLink}
    >
      Home
    </NavLink>

    <NavLink
      to="/movies"
      className={styles.linkHead}
      activeClassName={styles.activeLink}
    >
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
