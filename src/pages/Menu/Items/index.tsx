import { useEffect, useState } from "react";
import Item from "./Item";
import styles from "./Items.module.scss";
import data from "./menu.json";

interface ItemsProps {
  query: string;
  filter: number | null;
  sortBy: string;
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

  const sort = (menu: typeof data) => {
    switch (sortBy) {
      case "portion_asc":
        return menu.sort((a, b) => a.size - b.size);
      case "portion_desc":
        return menu.sort((a, b) => b.size - a.size);
      case "qtd_person_asc":
        return menu.sort((a, b) => a.serving - b.serving);
      case "qtd_person_desc":
        return menu.sort((a, b) => b.serving - a.serving);
      case "price_asc":
        return menu.sort((a, b) => a.price - b.price);
      case "price_desc":
        return menu.sort((a, b) => b.price - a.price);
      default:
        return menu;
    }
  };

  useEffect(() => {
    const filteredMenu = data.filter((item) => handleSearch(item.title) && handleFilter(item.category.id));

    setMenu(sort(filteredMenu));
  }, [query, filter, sortBy]);

  return (
    <div className={styles.items}>
      {menu.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
