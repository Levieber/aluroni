import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import Search from "./Search";
import { useState } from "react";
import Filters from "./Filters";

export default function Menu() {
  const [query, setQuery] = useState("");

  return (
    <main>
      <nav className={styles.navbar}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa.</div>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Cardápio:</h3>
        <Search query={query} setQuery={setQuery} />
        <div className={styles.menu__filters}>
          <Filters />
        </div>
      </section>
    </main>
  );
}
