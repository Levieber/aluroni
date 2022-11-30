import styles from "./About.module.scss";
import theme from "styles/Theme.module.scss";
import home from "assets/about/home.png";
import pasta1 from "assets/about/pasta1.png";
import pasta2 from "assets/about/pasta2.png";

const images = [
  {
    src: pasta1,
    alt: "Vários rolos de macarrões em círculo um ao lado do outro",
  },
  {
    src: pasta2,
    alt: "Pessoa segurando macarrrão que sai de uma máquina",
  },
];

export default function About() {
  return (
    <section>
      <h3 className={theme.title}>Sobre nós</h3>
      <div className={styles.aboutUs}>
        <img src={home} alt="Exterior do Aluroni" />
        <div className={styles.aboutUs__text}>
          <p>
            Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais
            saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária
            Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
          </p>
          <p>Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!</p>
          <p>
            Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que
            harmonizam perfeitamente com o seu parto, seja carne ou massa!
          </p>
        </div>
      </div>
      <div className={styles.images}>
        {images.map(({ src, alt }, index) => (
          <div key={index} className={styles.images__image}>
            <img src={src} alt={alt} />
          </div>
        ))}
      </div>
    </section>
  );
}
