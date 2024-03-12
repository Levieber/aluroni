import { memo, useMemo } from "react";
import { CgSearch } from "react-icons/cg";
import styles from "./search.module.scss";

interface SearchProps {
	query: string;
	setQuery: React.Dispatch<React.SetStateAction<string>>;
}

function Search({ query, setQuery }: SearchProps) {
	const SearchIcon = useMemo(() => <CgSearch size={20} color="#4C4D5E" />, []);

	return (
		<div className={styles.search}>
			<input
				type="text"
				value={query}
				onChange={(ev) => setQuery(ev.target.value)}
				placeholder="O que vai querer hoje?"
			/>
			{SearchIcon}
		</div>
	);
}

export default memo(Search);
