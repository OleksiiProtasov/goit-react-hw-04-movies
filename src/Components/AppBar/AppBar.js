import Navigation from "../Navigation/Navigation";
import styles from "./styles.module.css";

export default function AppBar() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
}
