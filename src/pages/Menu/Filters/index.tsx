import styles from "./Filters.module.scss";
import options from "./options.json";
import classNames from "classnames";
import { memo } from "react";

type IOption = typeof options[0];

interface FiltersProps {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

function Filters({ filter, setFilter }: FiltersProps) {
  const selectFilter = (option: IOption) => {
    if (option.id === filter) {
      setFilter(null);
    } else {
      setFilter(option.id);
    }
  };

  return (
    <div className={styles.filters}>
      {options.map((option) => (
        <button
          key={option.id}
          className={classNames(styles.filters__option, {
            [styles["filters__option--active"]]: option.id === filter,
          })}
          onClick={() => selectFilter(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default memo(Filters);
