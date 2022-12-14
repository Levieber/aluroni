import { useEffect, useState } from "react";
import { SortOptions } from "../Sort";
import Item from "./Item";
import styles from "./Items.module.scss";
import data from "data/menu.json";
import { Dish } from "types/Dish";

interface ItemsProps {
  query: string;
  filter: number | null;
  sortBy: SortOptions;
}

export default function Items({ query, filter, sortBy }: ItemsProps) {
  const [menu, setMenu] = useState(data);

  const handleSearch = (title: string) => {
    const regex = new RegExp(query, "i");

    return regex.test(title);
  };

  const handleFilter = (categoryId: number) => {
    if (!filter) return true;

    return categoryId === filter;
  };

  const sort = (
    menu: Dish[],
    property: keyof Pick<Dish, "size" | "serving" | "price">,
    type: "asc" | "desc"
  ) => {
    if (type === "desc") return menu.sort((a, b) => b[property] - a[property]);

    return menu.sort((a, b) => a[property] - b[property]);
  };

  const handleSort = (menu: Dish[]) => {
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
  };

  useEffect(() => {
    const filteredMenu = data.filter((item) => handleSearch(item.title) && handleFilter(item.category.id));

    setMenu(handleSort(filteredMenu));
  }, [query, filter, sortBy]);

  return (
    <div className={styles.items}>
      {menu.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
