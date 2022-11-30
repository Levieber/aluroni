import styles from "./Home.module.scss";
import menu from "data/menu.json";
import theme from "styles/Theme.module.scss";
import ourHome from "assets/home/our_home.png";

function shuffle(array: typeof menu) {
  const shuffledArray = [...array];

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

export default function Home() {
  return (
    <section>
      <h3 className={theme.title}>Recomendações da cozinha</h3>
      <div className={styles.recommendations}>
        {shuffle(menu)
          .splice(0, 3)
          .map(({ id, photo, title }) => (
            <div key={id}>
              <div className={styles.recommended__image}>
                <img src={photo} alt={title} />
              </div>
              <button className={styles.recommended__button}>Ver mais</button>
            </div>
          ))}
      </div>
      <h3 className={theme.title}>Nossa casa</h3>
      <div className={styles.ourHome}>
        <img src={ourHome} alt="Interior do Aluroni" />
        <address className={styles.ourHome__address}>
          Rua Ziriguidum, 777 <br />
          Nidavellir, Svartalfheim
        </address>
      </div>
    </section>
  );
}
