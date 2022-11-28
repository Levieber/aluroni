import styles from "./Item.module.scss";
import classNames from "classnames";
import menu from "data/menu.json";

type ItemProps = typeof menu[0];

export default function Item({ title, description, photo, size, serving, price, category }: ItemProps) {
  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.item__tags}>
          <div
            className={classNames(styles.item__type, {
              [styles[`item__type__${category.value}` as keyof typeof styles]]:
                `item__type__${category.value}` in styles,
            })}
          >
            {category.label}
          </div>
          <div className={styles.item__portion}>{size}g</div>
          <div className={styles.item__qtdperson}>
            Serve {serving} pessoa{serving === 1 ? "" : "s"}
          </div>
          <div className={styles.item__value}>R$ {price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
