import { memo } from "react";
import styles from "./Item.module.scss";
import { Dish } from "types/Dish";
import Tags from "components/Tags";
import { useNavigate } from "react-router-dom";

function Item({ id, title, description, photo, ...tags }: Dish) {
  const navigate = useNavigate();

  return (
    <div className={styles.item} onClick={() => navigate(`/dish/${id}`)}>
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

export default memo(Item);
