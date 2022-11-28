import styles from "./Home.module.scss";
import menu from "data/menu.json";

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
      <h3 className={styles.title}>Recomendações da cozinha</h3>
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
    </section>
  );
}
