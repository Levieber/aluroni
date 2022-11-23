import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";

export default function Menu() {
  return (
    <main>
      <nav className={styles.navbar}>
        <Logo />
      </nav>
    </main>
  );
}
