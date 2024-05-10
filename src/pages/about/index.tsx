import home from "@/assets/about/home.png?w=250;350&h=200;450&as=metadata";
import homeSrcsetAvif from "@/assets/about/home.png?w=250;350&h=200;450&format=avif&as=srcset";
import homeSrcsetWebp from "@/assets/about/home.png?w=250;350&h=200;450&format=webp&as=srcset";
import pasta1 from "@/assets/about/pasta1.png?w=250&h=250&as=metadata";
import pasta1SrcsetAvif from "@/assets/about/pasta1.png?w=250&h=250&format=avif&as=srcset";
import pasta1SrcsetWebp from "@/assets/about/pasta1.png?w=250&h=250&format=webp&as=srcset";
import pasta2 from "@/assets/about/pasta2.png?w=250&h=250&as=metadata";
import pasta2SrcsetAvif from "@/assets/about/pasta2.png?w=250&h=250&format=avif&as=srcset";
import pasta2SrcsetWebp from "@/assets/about/pasta2.png?w=3500&format=webp&as=srcset";
import theme from "@/styles/theme.module.scss";
import styles from "./about.module.scss";

const images = [
	{
		src: pasta1.src,
		width: pasta1.width,
		height: pasta1.height,
		avif: pasta1SrcsetAvif,
		webp: pasta1SrcsetWebp,
		alt: "Vários rolos de macarrões em círculo um ao lado do outro",
	},
	{
		src: pasta2.src,
		width: pasta2.width,
		height: pasta2.height,
		avif: pasta2SrcsetAvif,
		webp: pasta2SrcsetWebp,
		alt: "Pessoa segurando macarrrão que sai de uma máquina",
	},
];

export default function About() {
	return (
		<section>
			<h3 className={theme.title}>Sobre nós</h3>
			<div className={styles.aboutUs}>
				<picture>
					<source srcSet={homeSrcsetAvif} type="image/avif" />
					<source srcSet={homeSrcsetWebp} type="image/webp" />
					<img
						src={home.src}
						height={home.height}
						width={home.width}
						alt="Exterior do Aluroni"
					/>
				</picture>
				<div className={styles.aboutUs__text}>
					<p>
						Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa
						Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos
						pelos ingredientes tradicionais da culinária Italiana, frescos e de
						excelente qualidade para que sua experiência seja ainda mais
						intensa!
					</p>
					<p>
						Também possuímos uma cardápio de carnes com muitas opções de acordo
						com o seu gosto!
					</p>
					<p>
						Para acompanhar as massas italianas, Aluroni possui uma reserva de
						vinhos especiais, que harmonizam perfeitamente com o seu parto, seja
						carne ou massa!
					</p>
				</div>
			</div>
			<div className={styles.images}>
				{images.map(({ src, width, height, avif, webp, alt }, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: this list is static
					<picture className={styles.images__pasta} key={index}>
						<source srcSet={avif} type="image/avif" />
						<source srcSet={webp} type="image/webp" />
						<img width={height} height={width} src={src} alt={alt} />
					</picture>
				))}
			</div>
		</section>
	);
}
