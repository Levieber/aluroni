import Tags from "@/components/tags";
import type { Dish } from "@/types/dish";
import { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./item.module.scss";

function Item({ id, title, description, photo, ...tags }: Dish) {
	return (
		<Link to={`/dish/${id}`}>
			<div className={styles.item}>
				<div className={styles.item__image}>
					<picture>
						<source srcSet={`${photo}.avif`} type="image/avif" />
						<source srcSet={`${photo}.webp`} type="image/webp" />
						<img src={`${photo}.png`} alt={title} />
					</picture>
				</div>
				<div className={styles.item__description}>
					<div className={styles.item__title}>
						<h2>{title}</h2>
						<p>{description}</p>
						<Tags {...tags} />
					</div>
				</div>
			</div>
		</Link>
	);
}

export default memo(Item);
