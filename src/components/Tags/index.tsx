import classNames from "classnames";
import { Dish } from "types/Dish";
import styles from "./Tags.module.scss";

type TagsProps = Pick<Dish, "category" | "size" | "serving" | "price">;

export default function Tags({ category, size, serving, price }: TagsProps) {
  return (
    <div className={styles.tags}>
      <div
        className={classNames(styles.tags__type, {
          [styles[`tags__type__${category.value}` as keyof typeof styles]]:
            `tags__type__${category.value}` in styles,
        })}
      >
        {category.label}
      </div>
      <div className={styles.tags__portion}>{size}g</div>
      <div className={styles.tags__qtdperson}>
        Serve {serving} pessoa{serving === 1 ? "" : "s"}
      </div>
      <div className={styles.tags__value}>R$ {price.toFixed(2)}</div>
    </div>
  );
}
