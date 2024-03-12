import data from "@/data/menu.json";
import type { Dish } from "@/types/dish";
import { useCallback, useEffect, useState } from "react";
import type { SortOptions } from "../sort";
import Item from "./item";
import styles from "./items.module.scss";

interface ItemsProps {
	query: string;
	filter: number | null;
	sortBy: SortOptions;
}

export default function Items({ query, filter, sortBy }: ItemsProps) {
	const [menu, setMenu] = useState(data);

	const handleSearch = useCallback(
		(title: string) => {
			const regex = new RegExp(query, "i");

			return regex.test(title);
		},
		[query],
	);

	const handleFilter = useCallback(
		(categoryId: number) => {
			if (!filter) return true;

			return categoryId === filter;
		},
		[filter],
	);

	const sort = useCallback(
		(
			menu: Dish[],
			property: keyof Pick<Dish, "size" | "serving" | "price">,
			type: "asc" | "desc",
		) => {
			if (type === "desc")
				return menu.sort((a, b) => b[property] - a[property]);

			return menu.sort((a, b) => a[property] - b[property]);
		},
		[],
	);

	const handleSort = useCallback(
		(menu: Dish[]) => {
			switch (sortBy) {
				case "portion_asc":
					return sort(menu, "size", "asc");
				case "portion_desc":
					return sort(menu, "size", "desc");
				case "qtd_person_asc":
					return sort(menu, "serving", "asc");
				case "qtd_person_desc":
					return sort(menu, "serving", "desc");
				case "price_asc":
					return sort(menu, "price", "asc");
				case "price_desc":
					return sort(menu, "price", "desc");
				default:
					return menu;
			}
		},
		[sortBy, sort],
	);

	useEffect(() => {
		const filteredMenu = data.filter(
			(item) => handleSearch(item.title) && handleFilter(item.category.id),
		);

		setMenu(handleSort(filteredMenu));
	}, [handleSort, handleSearch, handleFilter]);

	return (
		<div className={styles.items}>
			{menu.map((item) => (
				<Item key={item.id} {...item} />
			))}
		</div>
	);
}
