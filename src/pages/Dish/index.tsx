import styles from "./Dish.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import classNames from "classnames";
import menu from "data/menu.json";
import NotFound from "pages/NotFound";

export default function Dish() {
  const navigate = useNavigate();

  const { id } = useParams();

  const dish = menu.find((item) => item.id === Number(id));

  if (!dish) return <NotFound />;

  const { title, photo, description, category, size, serving, price } = dish;

  return (
    <>
      <button className={styles.goBack} onClick={() => navigate(-1)}>
        <MdKeyboardArrowLeft /> Voltar
      </button>
      <section className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.image}>
          <img src={photo} alt={title} />
        </div>
        <div className={styles.content}>
          <p className={styles.content__description}>{description}</p>
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
        </div>
      </section>
    </>
  );
}
