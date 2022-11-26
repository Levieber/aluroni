import styles from "./Sort.module.scss";
import options from "./options.json";
import classNames from "classnames";
import { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const avaibleOptions = [
  "",
  "portion_asc",
  "portion_desc",
  "qtd_person_asc",
  "qtd_person_desc",
  "price_asc",
  "price_desc",
] as const;

export type SortOptions = typeof avaibleOptions[number];

interface SortProps {
  sortBy: SortOptions;
  setSortBy: React.Dispatch<React.SetStateAction<SortOptions>>;
}

function isSortOption(value: string): value is SortOptions {
  return avaibleOptions.some((option) => option === value);
}

export default function Sort({ sortBy, setSortBy }: SortProps) {
  const [isOpen, setIsOpen] = useState(false);
  const sortName = sortBy && options.find((option) => option.value === sortBy)?.name;

  return (
    <button
      className={classNames(styles.sort, { [styles["sort--active"]]: sortBy !== "" })}
      onClick={() => setIsOpen(!isOpen)}
      onBlur={() => setIsOpen(false)}
    >
      <span>{sortName || "Ordenar por"}</span>
      {isOpen ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
      <div className={classNames(styles.sort__options, { [styles["sort__options--active"]]: isOpen })}>
        {options.map(
          ({ name, value }) =>
            isSortOption(value) && (
              <div
                key={value}
                className={classNames(styles.sort__option, {
                  [styles["sort__option--active"]]: sortBy === value,
                })}
                onClick={() => setSortBy(value)}
              >
                {name}
              </div>
            )
        )}
      </div>
    </button>
  );
}
