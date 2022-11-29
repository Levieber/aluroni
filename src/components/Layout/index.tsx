import styles from "./Layout.module.scss";
import { Outlet } from "react-router-dom";
import theme from "styles/Theme.module.scss";

export default function Layout() {
  return (
    <main>
      <div className={styles.banner}>
        <div className={styles.banner__text}>A casa do código e da massa.</div>
      </div>
      <div className={theme.container}>
        <Outlet />
      </div>
    </main>
  );
}
