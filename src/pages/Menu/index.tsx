import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import Search from "./Search";
import { useState } from "react";
import Filters from "./Filters";
import Sort from "./Sort";

export default function Menu() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<string>("");

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
          <Filters filter={filter} setFilter={setFilter} />
          <Sort sortBy={sortBy} setSortBy={setSortBy} />
        </div>
      </section>
    </main>
  );
}
