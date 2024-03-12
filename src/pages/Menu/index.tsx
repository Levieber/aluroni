import theme from "@/styles/theme.module.scss";
import { useState } from "react";
import Filters from "./filters";
import Items from "./items";
import styles from "./menu.module.scss";
import Search from "./search";
import Sort, { type SortOptions } from "./sort";

export default function Menu() {
	const [query, setQuery] = useState("");
	const [filter, setFilter] = useState<number | null>(null);
	const [sortBy, setSortBy] = useState<SortOptions>("price_asc");

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
