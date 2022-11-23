import styles from "./Search.module.scss";
import { CgSearch } from "react-icons/cg";

interface SearchProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export default function Search({ query, setQuery }: SearchProps) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        value={query}
        onChange={(ev) => setQuery(ev.target.value)}
        placeholder="O que vai querer hoje?"
      />
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
}
