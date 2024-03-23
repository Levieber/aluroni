import ourHomeSrcsetAvif from "@/assets/home/our-home.png?w=500;700;900;1200&format=avif&as=srcset";
import ourHomeSrcsetWebp from "@/assets/home/our-home.png?w=500;700;900;1200&format=webp&as=srcset";
import ourHome from "@/assets/home/our-home.png?w=500;700;900;1200&as=metadata";
import menu from "@/data/menu.json";
import theme from "@/styles/theme.module.scss";
import type { Dish } from "@/types/dish";
import { useNavigate } from "react-router-dom";
import styles from "./home.module.scss";

function shuffle(array: Dish[]) {
	const shuffledArray = [...array];

	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));

		[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
	}

	return shuffledArray;
}

export default function Home() {
	const navigate = useNavigate();

	return (
		<section>
			<h3 className={theme.title}>Recomendações da cozinha</h3>
			<div className={styles.recommendations}>
				{shuffle(menu)
					.splice(0, 3)
					.map(({ id, photo, title }) => (
						<div key={id}>
							<div className={styles.recommended__image}>
								<picture>
									<source srcSet={`${photo}.avif`} type="image/avif" />
									<source srcSet={`${photo}.webp`} type="image/webp" />
									<img src={`${photo}.png`} alt={title} />
								</picture>
							</div>
							<button
								type="button"
								className={styles.recommended__button}
								onClick={() => navigate(`/dish/${id}`)}
							>
								Ver mais
							</button>
						</div>
					))}
			</div>
			<h3 className={theme.title}>Nossa casa</h3>
			<div className={styles.ourHome}>
				<picture>
					<source srcSet={ourHomeSrcsetAvif} type="image/avif" />
					<source srcSet={ourHomeSrcsetWebp} type="image/webp" />
					<img
						src={ourHome.src}
						width={ourHome.width}
						height={ourHome.height}
						alt="Interior do Aluroni"
					/>
				</picture>
				<address className={styles.ourHome__address}>
					Rua Ziriguidum, 777 <br />
					Nidavellir, Svartalfheim
				</address>
			</div>
		</section>
	);
}
