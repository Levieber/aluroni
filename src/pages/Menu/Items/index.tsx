import Item from "./Item";
import styles from "./Items.module.scss";
import menu from "./menu.json";

export default function Items() {
  return (
    <div className={styles.items}>
      {menu.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
