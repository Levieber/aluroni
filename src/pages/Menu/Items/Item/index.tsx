import styles from "./Item.module.scss";
import { Dish } from "types/Dish";
import Tags from "components/Tags";

export default function Item({ title, description, photo, ...tags }: Dish) {
  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
          <Tags {...tags} />
        </div>
      </div>
    </div>
  );
}
