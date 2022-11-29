import styles from "./Menu.module.scss";
import Search from "./Search";
import { useState } from "react";
import Filters from "./Filters";
import Sort, { SortOptions } from "./Sort";
import Items from "./Items";
import theme from "styles/Theme.module.scss";

export default function Menu() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<SortOptions>("");

  return (
    <section>
      <h3 className={theme.title}>Cardápio:</h3>
      <Search query={query} setQuery={setQuery} />
      <div className={styles.menu__filters}>
        <Filters filter={filter} setFilter={setFilter} />
        <Sort sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      <div>
        <Items query={query} filter={filter} sortBy={sortBy} />
      </div>
    </section>
  );
}
