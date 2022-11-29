import styles from "./Layout.module.scss";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main>
      <div className={styles.banner}>
        <div className={styles.banner__text}>A casa do código e da massa.</div>
      </div>
      <Outlet />
    </main>
  );
}
