import menu from "@/data/menu.json";
import { lazy } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./dish.module.scss";

const NotFound = lazy(() => import("@/pages/not-found"));
const Layout = lazy(() => import("@/components/layout"));
const Tags = lazy(() => import("@/components/tags"));

export default function Dish() {
	const navigate = useNavigate();

	const { id } = useParams();

	const dish = menu.find((item) => item.id === Number(id));

	if (!dish) return <NotFound />;

	const { title, photo, description, ...tags } = dish;

	return (
		<Layout>
			<button
				type="button"
				className={styles.goBack}
				onClick={() => navigate(-1)}
			>
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
