import styles from "./Filters.module.scss";
import options from "./options.json";

type IOption = typeof options[0];

export default function Filters() {
  const selectFilter = (option: IOption) => {
    console.log("Filtro selecionado:", option);
  };

  return (
    <div className={styles.filters}>
      {options.map((option) => (
        <button key={option.id} className={styles.filters__option} onClick={() => selectFilter(option)}>
          {option.label}
        </button>
      ))}
    </div>
  );
}
