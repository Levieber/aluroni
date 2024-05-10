import { clsx } from "clsx";
import { memo } from "react";
import styles from "./filters.module.scss";
import options from "./options.json";

type IOption = (typeof options)[0];

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
					type="button"
					key={option.id}
					className={clsx(styles.filters__option, {
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
