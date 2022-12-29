import styles from "./Dish.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import menu from "data/menu.json";
import { lazy } from "react";

const NotFound = lazy(() => import("pages/NotFound"));
const Layout = lazy(() => import("components/Layout"));
const Tags = lazy(() => import("components/Tags"));

export default function Dish() {
  const navigate = useNavigate();

  const { id } = useParams();

  const dish = menu.find((item) => item.id === Number(id));

  if (!dish) return <NotFound />;

  const { title, photo, description, ...tags } = dish;

  return (
    <Layout>
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
          <Tags {...tags} />
        </div>
      </section>
    </Layout>
  );
}
