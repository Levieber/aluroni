import theme from "@/styles/theme.module.scss";
import bannerSrcsetAvif from "@/assets/banner.png?w=500;700;900;1200&format=avif&as=srcset";
import bannerSrcsetWebp from "@/assets/banner.png?w=500;700;900;1200&format=webp&as=srcset";
import banner from "@/assets/banner.png?w=500;700;900;1200&as=metadata";
import { Outlet } from "react-router-dom";
import styles from "./layout.module.scss";

export default function Layout({ children }: { children?: React.ReactNode }) {
	return (
		<main>
			<div className={styles.banner}>
				<picture>
					<source srcSet={bannerSrcsetAvif} type="image/avif" />
					<source srcSet={bannerSrcsetWebp} type="image/webp" />
					<img
						src={banner.src}
						width={banner.width}
						height={banner.height}
						aria-labelledby="banner-text"
					/>
				</picture>
				<p id="banner-text" className={styles.banner__text}>
					A casa do código e da massa.
				</p>
			</div>
			<div className={theme.container}>{children ? children : <Outlet />}</div>
		</main>
	);
}
