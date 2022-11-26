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

  useEffect(() => {
    setMenu(data.filter((item) => handleSearch(item.title) && handleFilter(item.category.id)));
  }, [query, filter]);

  return (
    <div className={styles.items}>
      {menu.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
